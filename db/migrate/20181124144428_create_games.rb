class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :home_team_id
      t.integer :away_team_id
      t.datetime :start_time
      t.integer :sport_id

      t.timestamps
    end
  end
end
