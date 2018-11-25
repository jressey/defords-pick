class NFL::InboundStructureCreator
  class << self

    def call
      conferences.each do |c|
        store_conference(c)
        divisions_for(c).each do |d|
          store_division(d, c)
          teams_for(d).each do |t|
            store_team(t, d, c)
          end
        end
      end
    end

    def conferences
      @conferences || dat["conferences"]
    end

    def dat
      @dat || NFL::HttpClient.get_standings
    end

    def divisions_for(conference)
      @divisions || conference["divisions"]
    end

    def teams_for(division)
      @teams || division["teams"]
    end

    def sport
      @sport || Sport.find_by_name("Football")
    end

    def store_conference(conference)
      Conference.find_or_create_by({ name: conference["name"], api_id: conference["id"], sport: sport })
    end

    def store_division(division, conference)
      conference = Conference.find_by_api_id(conference["id"])
      Division.find_or_create_by({ name: division["name"], api_id: division["id"], conference_id: conference.id })
    end

    def store_team(team, division, conference)
      division = Division.find_by_api_id(division["id"])
      Team.find_or_create_by(
        {
          name: team["name"],
          api_id: team["id"],
          division_id: division.id,
          wins: team["wins"],
          losses: team["losses"],
          ties: team["ties"],
          win_percentage: team["win_pct"]
        }
      )
    end

  end
end