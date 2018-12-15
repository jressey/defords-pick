require 'rails_helper'

RSpec.describe CryptionService do
  #breaks build because of use of env vars in class, need to mock
  xit "decrypts the value it has encrypted" do
    data = CryptionService.create_access_token
    encrypted = CryptionService.encrypt(data)
    expect(CryptionService.decrypt(encrypted)).to eq(data)
  end
end
