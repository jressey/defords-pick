class ApplicationController < ActionController::API

  respond_to :html, :json

  def authenticate_user_from_token!
    auth_token = request.cookies['auth_token']

    if auth_token
      authenticate_with_auth_token(auth_token)
    else
      authentication_error
    end
  end

  private

  def authenticate_with_auth_token(auth_token)
    authentication_error unless (auth_token)
    token = CryptionService.decrypt(auth_token)

    user_id = token.split(":")[0]

    user = User.find(user_id)

    if user && Devise.secure_compare(user.access_token, token)
      sign_in user, store: false
    else
      authentication_error
    end
  end

  # Authentication Failure
  # Renders a 401 error
  def authentication_error
    render json: {error: ('unauthorized')}, status: 401
  end
end
