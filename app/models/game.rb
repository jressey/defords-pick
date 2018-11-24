class Game < ApplicationRecord
  belongs_to :away_team, class_name: "Team", foreign_key: "away_team_id"
  belongs_to :home_team, class_name: "Team", foreign_key: "home_team_id"
  belongs_to :sport

  def teams
    {
      away_team: away_team,
      home_team: home_team
    }
  end

  def self.this_week
    where('start_time BETWEEN ? AND ?', Date.new(2018, 11, 22), Date.new(2018, 11, 29))
  end

end
