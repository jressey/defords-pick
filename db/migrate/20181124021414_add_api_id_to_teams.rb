class AddApiIdToTeams < ActiveRecord::Migration[5.1]
  def change
    add_column :teams, :api_id, :string
  end
end
