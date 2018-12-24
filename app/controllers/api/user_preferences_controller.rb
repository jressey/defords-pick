class Api::UserPreferencesController < ApplicationController
  before_action :authenticate_user_from_token!

  def show
    render json: favorite_teams
  end

  def favorite_NBA_team
    render json: user_preference.favorite_basketball_team
  end

  def favorite_NFL_team
    render json: user_preference.favorite_football_team
  end

  def favorite_NHL_team
    render json: user_preference.favorite_hockey_team
  end

  def favorite_MLB_team
    render json: user_preference.favorite_baseball_team
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
    case team.sport.league_name
    when "NFL"
      user_preference.update(favorite_football_team: team)
    when "NHL"
      user_preference.update(favorite_hockey_team: team)
    when "NBA"
      user_preference.update(favorite_basketball_team: team)
    when "MLB"
      user_preference.update(favorite_baseball_team: team)
    end
    render json: team
  end

  private

  def user_preference
    @user_preference || current_api_user.user_preference
  end

end