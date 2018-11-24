module ApplicationHelper
  def pretty_time(time)
    time.strftime("%a, %b %d @ %I:%M%p")
  end
end
