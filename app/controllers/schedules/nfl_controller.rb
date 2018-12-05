class Schedules::NflController < ApplicationController

  def weekly
    @games = GameService.all_football_for_week.order(:start_time)
  end

end
