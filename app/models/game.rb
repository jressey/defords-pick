class Game < ApplicationRecord
  belongs_to :away_team, class_name: "Team", foreign_key: "away_team_id"
  belongs_to :home_team, class_name: "Team", foreign_key: "home_team_id"
  belongs_to :sport

  scope :football, -> { where(sport: Sport.find_by_name("Football")) }
  scope :hockey, -> { where(sport: Sport.find_by_name("Hockey")) }
  scope :for_day, ->(day=Time.zone.now) { where(start_time: begging_of_day_utc(day)..end_of_day_utc(day)  )}

  def teams
    {
      away_team: away_team,
      home_team: home_team
    }
  end

  def self.for_week
    week_number = NFL::WeekNumberForDate.call(Date.today)
    date_range = NFL::DateForWeekNumber.call(week_number)
    where('start_time BETWEEN ? AND ?', date_range[:start_day], date_range[:end_day])
  end

  def self.of_the_week
    games = for_week
    by_winning_pct(games)
  end

  def self.by_winning_pct(games)
    power_diffs = {}
    games.each do |game|
      power_diffs[game.id] = (game.away_team.win_percentage - game.home_team.win_percentage).abs
    end
    min = power_diffs.min_by{|k,v| v}
    find(min[0])
  end

  def self.of_the_day
    games = for_day
    by_points(games)
  end

  def self.by_points(games)
    power_diffs = {}
    games.each do |game|
      power_diffs[game.id] = (game.away_team.points - game.home_team.points).abs
    end
    min = power_diffs.min_by{|k,v| v}
    find(min[0])
  end

  # assuming UTC
  # yes, I hate this but it works
  def self.begging_of_day_utc(day)
    day.beginning_of_day + 5.hours
  end

  def self.end_of_day_utc(day)
    day.end_of_day + 5.hours
  end
end
