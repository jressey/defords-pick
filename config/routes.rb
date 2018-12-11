Rails.application.routes.draw do

  devise_for :users
  namespace :api do
    get 'games/hot', to: "games#hot_game"
    get 'games/featured', to: "games#featured_games"
    get 'games/nba', to: "games#nba"
    get 'games/nfl', to: "games#nfl"
    get 'games/nhl', to: "games#nhl"
    get 'user/favorite_team', to: "user_profiles#favorite_team"
  end

  root to: "home#index"

end
