class NHL::AbbreviationProcessor

  class << self

    def call
      teams.each do |team|
        store_abbreviation(team)
        sleep 5
      end
    end

    def teams
      Sport.where(name: "Hockey").first.teams
    end

    def team_profile(api_id)
      NHL::HttpClient.get_team_profile(api_id)
    end

    def store_abbreviation(team)
      team_profile(team.api_id)["alias"]
      team.update(
        {
          abbreviation: team_profile(team.api_id)["alias"]
        }
      )
    end

  end
end