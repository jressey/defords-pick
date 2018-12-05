class GameService

  class << self

    def best_football_of_week
      GameCriteria.by_win_percentage(all_football_for_week)
    end

    def all_football_for_week
      week_number = NFL::WeekNumberForDate.call(Date.today)
      date_range = NFL::DateForWeekNumber.call(week_number)
      Game.football.where('start_time BETWEEN ? AND ?', date_range[:start_day], date_range[:end_day])
    end

    def best_basketball_of_day
      GameCriteria.by_win_percentage(Game.basketball.for_day)
    end

    def all_basketball_for_day
      Game.basketball.for_day(Date.today)
    end

    def best_hockey_of_day
      GameCriteria.by_points(Game.hockey.for_day)
    end

    def all_hockey_for_day
      Game.hockey.for_day(Date.today)
    end

  end

end