Rails.application.routes.draw do

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

  namespace :api do
    get 'games/hot', to: "games#hot_game"
    get 'games/featured', to: "games#featured_games"
    get 'games/nba', to: "games#nba"
    get 'games/nfl', to: "games#nfl"
    get 'games/nhl', to: "games#nhl"
  end

  root to: "home#index"

end
