class NFL::InboundScheduleProcessor
    class << self

      def process_schedule_data

      end

      def dat
        @dat || NFL::HttpClient.get_schedule
      end

      def sport
        @sport || Sport.find_by_name("Football")
      end

      def store_game
      end

    end
  end