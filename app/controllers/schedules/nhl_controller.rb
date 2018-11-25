class Schedules::NhlController < ApplicationController

  def daily
    @games = Game.hockey.for_day(Date.new).order(:start_time)
  end

  def game_of_the_day
    @game_of_the_day = Game.hockey.of_the_day
  end

end
