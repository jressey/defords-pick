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

  def user_preference
    @user_preference || current_api_user.user_preference
  end

end