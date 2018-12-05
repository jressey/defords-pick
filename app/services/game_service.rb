class GameService

  class << self

    def football_game_of_week
      Game.find(GameCriteria.by_win_percentage(football_for_week))
    end

    def basketball_of_day
      Game.find(GameCriteria.by_win_percentage(Game.basketball.for_day))
    end

    def hockey_of_day
      Game.find(GameCriteria.by_points(Game.hockey.for_day))
    end

    def football_for_week
      week_number = NFL::WeekNumberForDate.call(Date.today)
      date_range = NFL::DateForWeekNumber.call(week_number)
      Game.football.where('start_time BETWEEN ? AND ?', date_range[:start_day], date_range[:end_day])
    end

  end

end