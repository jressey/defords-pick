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
