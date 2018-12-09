Rails.application.routes.draw do

  # devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }


  devise_for :users,
              path: '',
              path_names: {
                sign_in: 'login',
                sign_out: 'logout',
                registration: 'signup'
              },
              controllers: {
                sessions: 'sessions',
                registrations: 'registrations'
              }

  namespace :schedules do
    get "/nba", to: "nba#daily"
    get "/nba/game_of_the_day", to: "nba#game_of_the_day"
    get "/nfl", to: "nfl#weekly"
    get "/nfl/game_of_the_week", to: "nfl#game_of_the_week"
    get "/nhl", to: "nhl#daily"
    get "/nhl/game_of_the_day", to: "nhl#game_of_the_day"
  end

  namespace :api do
    scope :auth do
      get 'is_signed_in', to: 'auth#is_signed_in?'
    end

    get 'games/hot', to: "games#hot_game"
    get 'games/featured', to: "games#featured_games"
    get 'games/nba', to: "games#nba"
    get 'games/nfl', to: "games#nfl"
    get 'games/nhl', to: "games#nhl"
  end

  root to: "home#index"

end
