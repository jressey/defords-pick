class NHL::StructureUpdater
  class << self

    def call
      conferences.each do |c|
        divisions_for(c).each do |d|
          teams_for(d).each do |t|
            store_team(t, d, c)
          end
        end
      end
      true
    end

    def conferences
      dat["conferences"]
    end

    def dat
      NHL::HttpClient.get_standings
    end

    def divisions_for(conference)
      conference["divisions"]
    end

    def teams_for(division)
      division["teams"]
    end

    def sport
      @sport || Sport.find_by_name("Hockey")
    end

    def store_team(team, division, conference)
      team_record = Team.find_by_api_id(team["id"])
      team_record.update(
        {
          name: team["name"],
          api_id: team["id"],
          wins: team["wins"],
          losses: team["losses"],
          overtime_losses: team["overtime_losses"],
          win_percentage: team["win_pct"],
          points: team["points"]
        }
      )
    end
  end
end