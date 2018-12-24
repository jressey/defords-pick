class UserPreference < ApplicationRecord
  belongs_to :user
  belongs_to :favorite_basketball_team, class_name: "Team", foreign_key: "favorite_basketball_team_id"
  belongs_to :favorite_hockey_team, class_name: "Team", foreign_key: "favorite_hockey_team_id"
  belongs_to :favorite_baseball_team, class_name: "Team", foreign_key: "favorite_baseball_team_id"
  belongs_to :favorite_football_team, class_name: "Team", foreign_key: "favorite_football_team_id"

  default_scope { includes(:favorite_basketball_team, :favorite_hockey_team, :favorite_baseball_team, :favorite_football_team)}

  def update_favorite_team_for_league(league_name, team)
    case league_name
    when "NFL"
      update(favorite_football_team: team)
    when "NHL"
      update(favorite_hockey_team: team)
    when "NBA"
      update(favorite_basketball_team: team)
    when "MLB"
      update(favorite_baseball_team: team)
    end
  end
end
