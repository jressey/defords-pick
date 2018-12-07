Rails.application.routes.draw do

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  get "login", to: "users#login"
  get "logout", to: "users#logout"

  namespace :schedules do
    get "/nba", to: "nba#daily"
    get "/nba/game_of_the_day", to: "nba#game_of_the_day"
    get "/nfl", to: "nfl#weekly"
    get "/nfl/game_of_the_week", to: "nfl#game_of_the_week"
    get "/nhl", to: "nhl#daily"
    get "/nhl/game_of_the_day", to: "nhl#game_of_the_day"
  end

  namespace :api do
    get '/hot_game', to: "games#hot_game"
  end

  root to: "home#index"

end
