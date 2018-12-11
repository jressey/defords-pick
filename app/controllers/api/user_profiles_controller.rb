class Api::UserProfilesController < ApplicationController
  before_action :authenticate_user_from_token!

  def show
    render json: { team: "Steelers" }
  end

end