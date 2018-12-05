class HomeController < ApplicationController

  def show
    @football_game_of_the_week = GameService.football_game_of_week
    @hockey_game_of_the_day = GameService.hockey_of_day
    @basketball_game_of_the_day = GameService.basketball_of_day
    @baseball_game_of_the_day = nil
  end

end