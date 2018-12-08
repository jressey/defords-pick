class Api::GamesController < ActionController::API

  def hot_game
    # hot_game = nil
    # hot_game = Game.first
    hot_game = GameService.best_current_game
    render json: hot_game
  end

  def featured_games
    # list = []
    list = [
      GameService.best_football_of_week,
      GameService.best_hockey_of_day,
      GameService.best_basketball_of_day
    ]

    render json: list, each_serializer: GameSerializer
  end

  def nba
    render json: GameService.all_basketball_for_day, each_serializer: GameSerializer
  end

  def nfl
    render json: GameService.all_football_for_week, each_serializer: GameSerializer
  end

  def nhl
    render json: GameService.all_hockey_for_day, each_serializer: GameSerializer
  end


end