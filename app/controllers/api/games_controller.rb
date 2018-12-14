class Api::GamesController < ApplicationController

  def hot_game
    hot_game = GameService.best_current_game
    render json: hot_game
  end

  def featured_games
    list = []
    list.push(best_football_of_week) if best_football_of_week
    list.push(best_hockey_of_day) if best_hockey_of_day
    list.push(best_basketball_of_day) if best_basketball_of_day

    render json: list, each_serializer: GameSerializer
  end

  def nba
    render json: GameService.all_basketball_for_day(params[:offset]), each_serializer: GameSerializer
  end

  def nfl
    render json: GameService.all_football_for_week(params[:offset]), each_serializer: GameSerializer
  end

  def nhl
    render json: GameService.all_hockey_for_day(params[:offset]), each_serializer: GameSerializer
  end

  private

  def best_football_of_week
    @best_football_of_week || GameService.best_football_of_week(params[:offset])
  end

  def best_hockey_of_day
    @best_hockey_of_day || GameService.best_hockey_of_day(params[:offset])
  end

  def best_basketball_of_day
    @best_basketball_of_day || GameService.best_basketball_of_day(params[:offset])
  end

end