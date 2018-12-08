class Sport < ApplicationRecord
  has_many :conferences
  has_many :divisions, through: :conferences
  has_many :teams, through: :divisions
  has_many :games

  def stream_link
    return "https://www.reddit.com/r/nflstreams" if name.downcase == "football"
    return "https://www.reddit.com/r/NHLStreams/" if name.downcase == "hockey"
    return "https://www.reddit.com/r/nbastreams/" if name.downcase == "basketball"
  end
end
