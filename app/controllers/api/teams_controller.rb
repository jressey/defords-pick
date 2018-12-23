class Api::TeamsController < ApplicationController

  def index
    render json: Sport.where(league_name: params[:league_name].upcase).first.teams.order(:name)
  end

end