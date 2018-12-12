class Api::RegistrationsController < Devise::RegistrationsController
  def new
    super
  end

  def create
    @user = User.create(email: params[:email], password: params[:password])
    render json: @user
  end

  def update
    super
  end
end