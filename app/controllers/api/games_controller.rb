class Api::GamesController < ApplicationController

  def hot_game
    hot_game = game_service.best_current_game
    render json: hot_game
  end

  def featured_games
    list = []
    list.push(best_football_of_week) if best_football_of_week
    list.push(best_hockey_of_day) if best_hockey_of_day
    list.push(best_basketball_of_day) if best_basketball_of_day

    render json: list, each_serializer: GameSerializer
  end

  def next_games_for_team
    render json: game_service.next_games_for_team(3, params[:team_id])
  end

  def nba
    render json: game_service.all_basketball_for_day, each_serializer: GameSerializer
  end

  def nfl
    render json: game_service.all_football_for_week, each_serializer: GameSerializer
  end

  def nhl
    render json: game_service.all_hockey_for_day, each_serializer: GameSerializer
  end

  private

  def game_service
    @game_service || GameService.new(params[:offset])
  end

  def best_football_of_week
    @best_football_of_week || game_service.best_football_of_week
  end

  def best_hockey_of_day
    @best_hockey_of_day || game_service.best_hockey_of_day
  end

  def best_basketball_of_day
    @best_basketball_of_day || game_service.best_basketball_of_day
  end

end