class Api::RegistrationsController < Devise::RegistrationsController
  def create
    @user = User.create(email: params[:email], password: params[:password])
    render json: @user
  end
end