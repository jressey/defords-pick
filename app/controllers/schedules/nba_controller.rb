class Schedules::NbaController < ApplicationController

  def daily
    @games = GameService.all_basketball_for_day.order(:start_time)
  end

end