class AddPlayoffFlagToGame < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :is_playoff, :boolean, default: false
  end
end
