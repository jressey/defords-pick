class Api::UserProfilesController < ActionController::API
  before_action :authenticate_user!

  def favorite_team
    render json: Team.where(name: "Steelers").first
  end

end