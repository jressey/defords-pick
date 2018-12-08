class Api::GamesController < ActionController::API

  def hot_game
    # @hot_game = GameService.best_current_game
    @hot_game = Game.first
    # @hot_game = nil
    render json: @hot_game
  end

  def featured_games
    @f_game = GameService.best_football_of_week
    @h_game = GameService.best_hockey_of_day
    @b_game = GameService.best_basketball_of_day

    render json: [@f_game, @h_game, @b_game], each_serializer: GameSerializer
  end
end