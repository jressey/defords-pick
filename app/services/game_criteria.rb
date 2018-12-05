class GameCriteria

  class << self

    def by_win_percentage(games)
      power_diffs = {}
      games.each do |game|
        power_diffs[game.id] = (game.away_team.win_percentage - game.home_team.win_percentage).abs
      end
      min = power_diffs.min_by{|k,v| v}
      games.select{ |g| g["id"] == min[0] }.first
    end

    def by_points(games)
      power_diffs = {}
      games.each do |game|
        power_diffs[game.id] = (game.away_team.points - game.home_team.points).abs
      end
      min = power_diffs.min_by{|k,v| v}
      games.select{ |g| g["id"] == min[0] }.first
    end

  end

end