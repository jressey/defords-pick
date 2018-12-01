class Schedules::NhlController < ApplicationController

  def daily
    @games = Game.hockey.for_day(Date.today).order(:start_time)
  end

end
