module ApplicationHelper
  def in_eastern(time)
    time.in_time_zone("EST")
  end

  def pretty_time(time)
    time.strftime("%a, %b %d @ %I:%M%p")
  end

end
