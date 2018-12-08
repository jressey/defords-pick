class Team < ApplicationRecord
  belongs_to :division
  has_many :games

  def league_abbreviation
    division.conference.sport.league_name
  end

  def record
    if (ties.present?)
      return "#{wins}-#{losses}-#{ties}"
    elsif (overtime_losses.present?)
      return "#{wins}-#{losses}-#{overtime_losses}"
    else
      return "#{wins}-#{losses}"
    end
  end
end
