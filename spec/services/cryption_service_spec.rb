require 'rails_helper'

RSpec.describe CryptionService do
  it "decrypts the value it has encrypted" do
    data = CryptionService.create_access_token
    encrypted = CryptionService.encrypt(data)
    expect(CryptionService.decrypt(encrypted)).to eq(data)
  end
end
