Rails.application.routes.draw do

  namespace :schedules do
    get "/nba", to: "nba#daily"
    get "/nfl", to: "nfl#weekly"
    get "/nfl/game_of_the_week", to: "nfl#game_of_the_week"
    get "/nhl", to: "nhl#daily"
    get "/nhl/game_of_the_day", to: "nhl#game_of_the_day"
  end

  root to: "home#show"

end
