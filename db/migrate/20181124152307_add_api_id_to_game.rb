class AddApiIdToGame < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :api_id, :string
  end
end
