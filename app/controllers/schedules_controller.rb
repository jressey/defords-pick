class SchedulesController < ApplicationController

  def nfl
    @games = Game.this_week.order(:start_time)
  end

end
