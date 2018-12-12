class Api::UserSchedulesController < ApplicationController
  def show
    render json: { team: "Steelers" }
  end
end