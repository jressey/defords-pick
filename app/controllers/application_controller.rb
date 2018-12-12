class ApplicationController < ActionController::API

  respond_to :html, :json


  def authenticate_user_from_token!
    user_id = request.cookies['user_id']
    auth_token = request.cookies['auth_token']

    if auth_token
      authenticate_with_auth_token(user_id, auth_token)
    else
      authentication_error
    end
  end

  private

  def authenticate_with_auth_token(user_id, auth_token)
    authentication_error unless (user_id && auth_token)

    user = User.find(user_id)

    if user && Devise.secure_compare(user.access_token, CryptionService.decrypt(auth_token))
      # User can access
      sign_in user, store: false
    else
      authentication_error
    end
  end

  ##
  # Authentication Failure
  # Renders a 401 error
  def authentication_error
    # User's token is either invalid or not in the right format
    render json: {error: ('unauthorized')}, status: 401  # Authentication timeout
  end
end
