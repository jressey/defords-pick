class Game < ApplicationRecord
  has_one :away_team, class_name: "Team", foreign_key: "away_team_id"
  has_one :home_team, class_name: "Team", foreign_key: "home_team_id"
  belongs_to :sport
end
