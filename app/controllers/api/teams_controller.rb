class Api::TeamsController < ApplicationController

  def index
    teams = Sport.where(league_name: params[:league_name].upcase).first.teams
    render json: teams
  end

end