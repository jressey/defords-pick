class Schedules::NhlController < ApplicationController

  def daily
    @games = Game.hockey.for_day(Date.today).order(:start_time)
  end

  def game_of_the_day
    games = for_day
    @game_of_the_day = Game.hockey_of_day
  end

end
