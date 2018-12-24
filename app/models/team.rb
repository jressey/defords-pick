class Team < ApplicationRecord
  belongs_to :division
  has_many :games
  has_many :user_preferences

  def record
    if (ties.present?)
      return "#{wins}-#{losses}-#{ties}"
    elsif (overtime_losses.present?)
      return "#{wins}-#{losses}-#{overtime_losses}"
    else
      return "#{wins}-#{losses}"
    end
  end

  def sport
    division.conference.sport
  end
end
