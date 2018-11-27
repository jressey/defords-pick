module ApplicationHelper
  def in_eastern(time)
    time.in_time_zone("EST")
  end

  def pretty_time(time)
    time.strftime("%a, %b %d @ %I:%M%p")
  end

  def espn_image_for(team)
    "http://a1.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/#{team.abbreviation.try(:upcase)}.png&h=55&w=55"
  end
end
