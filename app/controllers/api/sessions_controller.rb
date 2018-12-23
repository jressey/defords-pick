class Api::SessionsController < ApplicationController

  def create
    @user = User.find_for_database_authentication(email: params[:email])
    return invalid_login_attempt unless @user

    if @user.valid_password?(params[:password])
      sign_in :user, @user
      render json: @user, serializer: SessionSerializer, root: nil
    else
      invalid_login_attempt
    end
  end

  def show
    render json: api_current_user
  end

  def destroy
    @user = User.find_for_database_authentication(email: params[:email])
    sign_out :user
    render json: {}, status: 200
  end

  private

  def invalid_login_attempt
    warden.custom_failure!
    render json: {error: ('sessions_controller.invalid_login_attempt')}, status: :unprocessable_entity
  end

end