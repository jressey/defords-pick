Rails.application.routes.draw do

  devise_for :users, only: [:create]

  namespace :api do

    resource :login, only: [:create, :destroy], controller: :sessions
    get 'user_profiles/show', to: "user_profiles#show"

    resource :games do
      get 'hot', to: "games#hot_game"
      get 'featured', to: "games#featured_games"
      get 'nba', to: "games#nba"
      get 'nfl', to: "games#nfl"
      get 'nhl', to: "games#nhl"
    end
  end

  root to: "home#index"

end
