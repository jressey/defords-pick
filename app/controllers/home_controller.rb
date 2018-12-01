class HomeController < ApplicationController

  def show
    @football_game_of_the_week = Game.football_game_of_week
    @hockey_game_of_the_day = Game.hockey_of_day
    @basketball_game_of_the_day = Game.basketball_of_day
    @baseball_game_of_the_day = nil
  end

end