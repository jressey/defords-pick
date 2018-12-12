Rails.application.routes.draw do

  namespace :api do
    devise_for :users

    resource :login, only: [:create, :destroy], controller: :sessions

    resource :games do
      get 'hot', to: "games#hot_game"
      get 'featured', to: "games#featured_games"
      get 'nba', to: "games#nba"
      get 'nfl', to: "games#nfl"
      get 'nhl', to: "games#nhl"
    end

    # protected endpoints
    resource :calenders, only: [:show]
  end

  root to: "home#index"

end
