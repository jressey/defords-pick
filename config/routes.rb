Rails.application.routes.draw do

  namespace :schedules do
    get "/nfl", to: "nfl#daily"
    get "/nfl/game_of_the_week", to: "nfl#game_of_the_week"
    get "/nhl", to: "nhl#daily"
  end

  root to: "static#home"

end
