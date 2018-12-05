class GameService

  class << self

    def best_current_game
      return GameCriteria.by_win_percentage(current_football_games) if current_football_games.present?
      return GameCriteria.by_points(current_hockey_games) if current_hockey_games.present?
      return GameCriteria.by_win_percentage(current_basketball_games) if current_basketball_games.present?
    end

    def current_football_games
      Game.football.current
    end

    def current_hockey_games
      Game.hockey.current
    end

    def current_basketball_games
      Game.basketball.current
    end

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
      Game.basketball.for_day
    end

    def best_hockey_of_day
      GameCriteria.by_points(Game.hockey.for_day)
    end

    def all_hockey_for_day
      Game.hockey.for_day
    end



  end

end