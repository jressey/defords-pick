class Schedules::NflController < ApplicationController

  def weekly
    @games = Game.football.for_week.order(:start_time)
  end

end
