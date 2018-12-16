class FixTableTypo < ActiveRecord::Migration[5.1]
  def change
    rename_column :user_preferences, :favoritate_baseball_team_id, :favorite_baseball_team_id
    rename_column :user_preferences, :favorite_basket_ball_team_id, :favorite_basketball_team_id
  end
end
