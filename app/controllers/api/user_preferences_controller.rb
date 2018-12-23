class Api::UserPreferencesController < ApplicationController
  before_action :authenticate_user_from_token!

  def show
    render json: favorite_teams
  end

  def favorite_teams
    {
      favorite_basketball_team: user_preference.favorite_basketball_team,
      favorite_hockey_team: user_preference.favorite_hockey_team,
      favorite_baseball_team: user_preference.favorite_baseball_team,
      favorite_football_team: user_preference.favorite_football_team
    }
  end

  def set_favorite_team
    team = Team.find(params[:team_id])
    case params[:league]
    when "NFL"
      user_prefernce.update(favorite_football_team: team)
    when "NHL"
      user_prefernce.update(favorite_hockey_team: team)
    when "NBA"
      user_prefernce.update(favorite_basketball_team: team)
    when "MLB"
      user_prefernce.update(favorite_baseball_team: team)
    end
    return team
  end

  def user_preference
    @user_preference || current_api_user.user_preference
  end

end