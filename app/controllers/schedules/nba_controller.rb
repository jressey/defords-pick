class Schedules::NbaController < ApplicationController

  def daily
    @games = Game.basketball.for_day(Date.today).order(:start_time)
  end

  def game_of_the_day
    @game_of_the_day = Game.basketball.of_the_day
  end

end
