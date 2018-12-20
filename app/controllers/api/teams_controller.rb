class Api::TeamsController < ApplicationController

  def index
    teams = Team.joins(:sports).where("sports.league_name = ?", params[:league_name])
    render json: teams
  end

end