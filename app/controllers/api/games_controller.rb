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
end