class Game < ApplicationRecord
  belongs_to :away_team, class_name: "Team", foreign_key: "away_team_id"
  belongs_to :home_team, class_name: "Team", foreign_key: "home_team_id"
  belongs_to :sport

  scope :football, -> { where(sport: Sport.find_by_name("Football")) }
  scope :hockey, -> { where(sport: Sport.find_by_name("Hockey")) }
  scope :for_day, ->(day) { where(start_time: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day  )}

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
    by_winning_pct
  end

  def self.by_winning_pct
    games = for_week
    power_diffs = {}
    games.each do |game|
      power_diffs[game.id] = (game.away_team.win_percentage - game.home_team.win_percentage).abs
    end
    min = power_diffs.min_by{|k,v| v}
    find(min[0])
  end

end
