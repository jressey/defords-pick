class NHL::AbbreviationProcessor

  class << self

    def call
      teams.each do |team|
        store_abbreviation(team)
      end
    end

    def teams
      Sport.where(name: "Hockey").first.teams
    end

    def store_abbreviation(team)
      return unless team.abbreviation.blank?
      sleep 1
      team.update(
        {
          abbreviation: get_abbreviation(team_profile(team.api_id)["alias"])
        }
      )
    end

    def team_profile(api_id)
      NHL::HttpClient.get_team_profile(api_id)
    end

    #special rules to convert for espn images
    def get_abbreviation(abbreviation)
      return "VGS" if abbreviation == "VGK"
      return abbreviation
    end

  end
end