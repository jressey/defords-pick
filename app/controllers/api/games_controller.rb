class Api::GamesController < ActionController::API

  def hot_game
    # @hot_game = GameService.best_current_game
    @hot_game = Game.first
    # @hot_game = nil
    render json: @hot_game
  end
end