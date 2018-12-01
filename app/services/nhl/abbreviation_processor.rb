class NHL::AbbreviationProcessor

  class << self

    def call
      teams.each do |team|
        sleep 1
        store_abbreviation(team)
      end
    end

    def teams
      Sport.where(name: "Hockey").first.teams
    end

    def store_abbreviation(team)
      team.update(
        {
          abbreviation: team_profile(team.api_id)["alias"]
        }
      )
    end

    def team_profile(api_id)
      NHL::HttpClient.get_team_profile(api_id)
    end

  end
end