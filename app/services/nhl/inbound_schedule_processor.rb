class NHL::InboundScheduleProcessor

  class << self

      def call
        games.each do |game|
          store_game(game)
        end
      end

      def games
        dat["games"]
      end

      def dat
        @dat || NHL::HttpClient.get_schedule
      end

      def sport
        @sport || Sport.find_by_name("Hockey")
      end

      def store_game(game)
        home_team = Team.find_by_api_id(game["home"]["id"])
        away_team = Team.find_by_api_id(game["away"]["id"])
        Game.find_or_create_by(
          {
            sport: sport,
            api_id: game["id"],
            start_time: game["scheduled"].to_datetime,
            home_team_id: home_team.id,
            away_team_id: away_team.id
          }
        )
      end

    end
  end