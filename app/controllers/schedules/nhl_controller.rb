class Schedules::NhlController < ApplicationController
  before_action :authenticate_user!

  def daily
    @games = GameService.all_hockey_for_day.order(:start_time)
  end

end
