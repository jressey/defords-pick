require 'rails_helper'

RSpec.describe Game, type: :model do

  describe ".of_the_week" do
    let! (:sport) { FactoryBot.create(:sport, name: "Football") }
    let! (:home_team_1) { FactoryBot.create(:team, win_percentage: 0.00) }
    let! (:away_team_1) { FactoryBot.create(:team, win_percentage: 0.99) }
    let! (:game_1) { FactoryBot.create(:game, home_team: home_team_1, away_team: away_team_1) }
    let! (:home_team_2) { FactoryBot.create(:team, win_percentage: 0.50) }
    let! (:away_team_2) { FactoryBot.create(:team, win_percentage: 0.50) }
    let! (:game_2) { FactoryBot.create(:game, home_team: home_team_1, away_team: away_team_1) }
    it "is alive" do
      expect(Game.of_the_week).to eq(game_2)
    end
  end
end
