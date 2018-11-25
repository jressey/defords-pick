class Schedules::NflController < ApplicationController

  def weekly
    @games = Game.football.for_week.order(:start_time)
  end

  def game_of_the_week
    @game_of_the_week = Game.football.of_the_week
  end

end
