class SessionSerializer < ActiveModel::Serializer

  attributes :email, :token_type, :user_id, :auth_token

  def user_id
    object.id
  end

  def token_type
    'Bearer'
  end

  def auth_token
    CryptionService.encrypt(object.access_token)
  end

end