class NFL::InboundStructureUpdater
  class << self

    def call
      conferences.each do |c|
        divisions_for(c).each do |d|
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

    def store_team(team, division, conference)
      team_record = Team.find_by_api_id(team["id"])
      team_record.update(
        {
          wins: team["wins"],
          losses: team["losses"],
          ties: team["ties"],
          win_percentage: team["win_pct"]
        }
      )
    end
  end
end