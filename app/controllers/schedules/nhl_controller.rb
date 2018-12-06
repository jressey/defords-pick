class Schedules::NhlController < ApplicationController

  def daily
    @games = GameService.all_hockey_for_day.order(:start_time)
  end

end
