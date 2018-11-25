Rails.application.routes.draw do

  namespace :schedules do
    get "/nfl", to: "nfl#daily"
    get "/nhl", to: "nhl#daily"
  end

end
