class SchedulesController < ApplicationController

  def nfl
    @games = Game.this_week.order(:start_time)
    @game_of_the_week = Game.of_the_week
  end

end
