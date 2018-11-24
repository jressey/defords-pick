class Sport < ApplicationRecord
  has_many :conferences
  has_many :divisions, through: :conferences
  has_many :teams, through: :divisions
  has_many :games
end
