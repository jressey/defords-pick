class CryptionService

  class << self
    def create_access_token
      generate_random
    end

    def encrypt text
      text = text.to_s unless text.is_a? String

      salt  = SecureRandom.hex len
      key   = ActiveSupport::KeyGenerator.new(ENV['SECRET_KEY']).generate_key salt, len
      crypt = ActiveSupport::MessageEncryptor.new key
      encrypted_data = crypt.encrypt_and_sign text
      "#{salt}$$#{encrypted_data}"
    end

    def decrypt text
      salt, data = text.split "$$"

      key   = ActiveSupport::KeyGenerator.new(ENV['SECRET_KEY']).generate_key salt, len
      crypt = ActiveSupport::MessageEncryptor.new key
      crypt.decrypt_and_verify data
    end

    def len
      ActiveSupport::MessageEncryptor.key_len
    end

    #this generates 32 bit key which is necessary for AS::MessageEncryptor
    def generate_random
      SecureRandom.hex(64)
    end

  end
end