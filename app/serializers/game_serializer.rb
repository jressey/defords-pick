class GameSerializer < ActiveModel::Serializer
  attributes :start_time, :stream_link
  belongs_to :sport
  belongs_to :away_team, class_name: "Team", foreign_key: "away_team_id"
  belongs_to :home_team, class_name: "Team", foreign_key: "home_team_id"
end
