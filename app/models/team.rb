class Team < ApplicationRecord
  belongs_to :division
  has_many :games

  def record
    # {
    #   wins: wins,
    #   ties: ties,
    #   losses: losses,
    #   overtime_losses: overtime_losses
    # }
    if (ties.present?)
      return "#{wins}-#{losses}-#{ties}"
    elsif (overtime_losses.present?)
      return "#{wins}-#{losses}-#{overtime_losses}"
    else
      return "#{wins}-#{losses}"
    end
  end
end
