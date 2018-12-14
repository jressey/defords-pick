class Game < ApplicationRecord
  belongs_to :away_team, class_name: "Team", foreign_key: "away_team_id"
  belongs_to :home_team, class_name: "Team", foreign_key: "home_team_id"
  belongs_to :sport

  scope :with_teams, -> { includes(:sport, :away_team, :home_team)}
  scope :basketball, -> { where(sport: Sport.find_by_name("Basketball")) }
  scope :football, -> { where(sport: Sport.find_by_name("Football")) }
  scope :hockey, -> { where(sport: Sport.find_by_name("Hockey")) }
  scope :current, -> { where(start_time: (Time.zone.now - 3.hours)..Time.zone.now) }

  def self.for_day(offset="+00:00")
    where(start_time: self.user_time(offset).beginning_of_day..self.user_time(offset).end_of_day)
  end

  def teams
    {
      away_team: away_team,
      home_team: home_team
    }
  end

  def stream_link
    sport.stream_link
  end

  private

  def self.user_time(offset)
    Time.now.getlocal(offset)
  end

end
