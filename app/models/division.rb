class Division < ApplicationRecord
  belongs_to :conference
  has_many :teams
end
