class GameService

  class << self

    def best_current_game
      return GameCriteria.by_win_percentage(current_football_games) if current_football_games.present?
      return GameCriteria.by_points(current_hockey_games) if current_hockey_games.present?
      return GameCriteria.by_win_percentage(current_basketball_games) if current_basketball_games.present?
      nil
    end

    def current_football_games
      Game.football.current.with_teams
    end

    def current_hockey_games
      Game.hockey.current.with_teams
    end

    def current_basketball_games
      Game.basketball.current.with_teams
    end

    def best_football_of_week(offset)
      GameCriteria.by_win_percentage(all_football_for_week(offset))
    end

    def all_football_for_week(offset)
      week_number = NFL::WeekNumberForDate.call(Date.today)
      date_range = NFL::DateForWeekNumber.call(week_number)
      Game.football.where('start_time BETWEEN ? AND ?', date_range[:start_day], date_range[:end_day]).with_teams
    end

    def best_basketball_of_day(offset)
      GameCriteria.by_win_percentage(Game.basketball.for_day(offset))
    end

    def all_basketball_for_day(offset)
      Game.basketball.for_day(offset).with_teams
    end

    def best_hockey_of_day(offset)
      GameCriteria.by_points(Game.hockey.for_day(offset))
    end

    def all_hockey_for_day(offset)
      Game.hockey.for_day(offset).with_teams
    end



  end

end