class Game < ApplicationRecord
  belongs_to :away_team, class_name: "Team", foreign_key: "away_team_id"
  belongs_to :home_team, class_name: "Team", foreign_key: "home_team_id"
  belongs_to :sport

  scope :with_teams, -> { includes(:sport, :away_team, :home_team)}
  scope :basketball, -> { where(sport: Sport.find_by_name("Basketball")) }
  scope :football, -> { where(sport: Sport.find_by_name("Football")) }
  scope :hockey, -> { where(sport: Sport.find_by_name("Hockey")) }
  scope :for_day, ->(day=Time.zone.now) { where(start_time: begging_of_day_etc(day)..end_of_day_etc(day)  )}
  scope :current, -> { where(start_time: (Time.zone.now - 3.hours)..Time.zone.now) }

  def teams
    {
      away_team: away_team,
      home_team: home_team
    }
  end

  def stream_link
    sport.stream_link
  end

  def self.begging_of_day_etc(day)
    day.beginning_of_day
  end

  def self.end_of_day_etc(day)
    day.end_of_day
  end
end
