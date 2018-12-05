class Game < ApplicationRecord
  belongs_to :away_team, class_name: "Team", foreign_key: "away_team_id"
  belongs_to :home_team, class_name: "Team", foreign_key: "home_team_id"
  belongs_to :sport

  scope :basketball, -> { where(sport: Sport.find_by_name("Basketball")) }
  scope :football, -> { where(sport: Sport.find_by_name("Football")) }
  scope :hockey, -> { where(sport: Sport.find_by_name("Hockey")) }
  scope :for_day, ->(day=Time.zone.now) { where(start_time: day.beginning_of_day..day.end_of_day  )}
  scope :current, -> { where(start_time: (Time.zone.now - 4.hours)..Time.zone.now) }

  def teams
    {
      away_team: away_team,
      home_team: home_team
    }
  end
end
