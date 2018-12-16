class CreateUserPreferences < ActiveRecord::Migration[5.1]
  def change
    create_table :user_preferences do |t|
      t.integer :favorite_football_team_id
      t.integer :favoritate_baseball_team_id
      t.integer :favorite_hockey_team_id
      t.integer :favorite_basket_ball_team_id

      t.timestamps
    end
  end
end
