Rails.application.routes.draw do

  namespace :api do
    devise_for :users

    resource :login, only: [:create, :destroy, :show], controller: :sessions do
    end

    resource :games do
      get 'hot', to: "games#hot_game"
      get 'featured', to: "games#featured_games"
      get 'nba', to: "games#nba"
      get 'nfl', to: "games#nfl"
      get 'nhl', to: "games#nhl"
    end

    resources :teams, only: :index

    # protected endpoints
    resource :user_preferences, only: [:show] do
      post 'set_favorite_team', to: "user_preferences#set_favorite_team"
    end
  end

  root to: "home#index"

end
