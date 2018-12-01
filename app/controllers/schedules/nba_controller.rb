class Schedules::NbaController < ApplicationController

  def daily
    @games = Game.basketball.for_day(Date.today).order(:start_time)
  end

end
