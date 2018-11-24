class Conference < ApplicationRecord
  belongs_to :sport
  has_many :divisions
  has_many :teams, through: :divisions
end
