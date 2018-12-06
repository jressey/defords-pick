class HomeController < ApplicationController

  def index
    @hot_game = GameService.best_current_game
    @football_game_of_the_week = GameService.best_football_of_week
    @hockey_game_of_the_day = GameService.best_hockey_of_day
    @basketball_game_of_the_day = GameService.best_basketball_of_day
    @baseball_game_of_the_day = nil
  end

end