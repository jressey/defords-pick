class Game < ApplicationRecord
  belongs_to :away_team, class_name: "Team", foreign_key: "away_team_id"
  belongs_to :home_team, class_name: "Team", foreign_key: "home_team_id"
  belongs_to :sport

  scope :basketball, -> { where(sport: Sport.find_by_name("Basketball")) }
  scope :football, -> { where(sport: Sport.find_by_name("Football")) }
  scope :hockey, -> { where(sport: Sport.find_by_name("Hockey")) }
  scope :for_day, ->(day=Time.zone.now) { where(start_time: begging_of_day_utc(day)..end_of_day_utc(day)  )}

  def teams
    {
      away_team: away_team,
      home_team: home_team
    }
  end

  def self.football_game_of_week
    by_win_percentage(football.for_week)
  end

  def self.for_week
    week_number = NFL::WeekNumberForDate.call(Date.today)
    date_range = NFL::DateForWeekNumber.call(week_number)
    where('start_time BETWEEN ? AND ?', date_range[:start_day], date_range[:end_day])
  end

  def self.basketball_of_day
    by_win_percentage(basketball.for_day)
  end

  def self.hockey_of_day
    by_points(hockey.for_day)
  end

  def self.by_win_percentage(games)
    power_diffs = {}
    games.each do |game|
      power_diffs[game.id] = (game.away_team.win_percentage - game.home_team.win_percentage).abs
    end
    min = power_diffs.min_by{|k,v| v}
    find(min[0])
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
    return day.beginning_of_day + 5.hours if Rails.env = "development"
    day.beginning_of_day
  end

  def self.end_of_day_utc(day)
    return day.end_of_day + 5.hours if Rails.env = "development"
    day.end_of_day
  end
end
