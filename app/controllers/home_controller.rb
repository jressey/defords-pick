class HomeController < ApplicationController

  def show
    @football_game_of_the_week = Game.football.of_the_week
    @hockey_game_of_the_day = Game.hockey.of_the_day
  end

end