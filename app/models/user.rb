class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :trackable,
        :recoverable, :rememberable, :validatable#, :confirmable
        after_create :update_access_token!

  validates :email, presence: true

  has_one :user_preference

  def favorite_baseball_team
    user_preference.favorite_baseball_team
  end

  def favorite_basketball_team
    user_preference.favorite_basketball_team
  end

  def favorite_football_team
    user_preference.favorite_football_team
  end

  def favorite_hockey_team
    user_preference.favorite_hockey_team
  end

  private

  def update_access_token!
    update(access_token: CryptionService.create_access_token)
  end

end