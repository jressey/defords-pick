class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :trackable,
        :recoverable, :rememberable, :validatable#, :confirmable
        after_create :update_access_token!

  validates :email, presence: true

  private

  def update_access_token!
    self.access_token = "#{Devise.friendly_token}"
    save
  end

end