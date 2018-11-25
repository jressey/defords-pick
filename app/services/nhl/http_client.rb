class NHL::HttpClient

  class << self

    def root_url
      "https://api.sportradar.us/nhl/trial/v6/en/"
    end

    def key
      ENV["NHL_KEY"]
    end

    def get_standings
      JSON.parse HTTParty.get(standings_url).body
    end

    def get_schedule
      JSON.parse HTTParty.get(schedule_url).body
    end

    def standings_url
      "#{root_url}seasons/2018/REG/standings.json?api_key=#{key}"
    end

    def schedule_url
      "#{root_url}games/2018/REG/schedule.json?api_key=#{key}"
    end

  end
end