class NFL::HttpClient

  class << self

    def get_standings
      JSON.parse HTTParty.get(standings_url).body
    end

    def standings_url
      @url || "#{root_url}seasons/2018/standings.json?api_key=#{key}"
    end

    def root_url
      @root_url || "https://api.sportradar.us/nfl/official/trial/v5/en/"
    end

    def key
      @key || ENV["NFL_KEY"]
    end

  end
end