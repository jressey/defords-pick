class NFL::InboundScheduleProcessor
#         NFL::InboundScheduleProcessor.process_schedule_data
    class << self

      def process_schedule_data
        weeks.each do |week|
          games_for_week(week).each do |game|
            store_game(game)
          end
        end
      end

      def dat
        @dat || NFL::HttpClient.get_schedule
      end

      def weeks
        @dat || dat["weeks"]
      end

      def games_for_week(week)
        week["games"]
      end

      def sport
        @sport || Sport.find_by_name("Football")
      end

      def store_game(game)
        home_team = Team.find_by_api_id(game["home"]["id"])
        away_team = Team.find_by_api_id(game["away"]["id"])
        Game.find_or_create_by(
          {
            sport: sport,
            api_id: game["id"],
            start_time: game["scheduled"].to_date,
            home_team_id: home_team.id,
            away_team_id: away_team.id
          }
        )
      end

    end
  end