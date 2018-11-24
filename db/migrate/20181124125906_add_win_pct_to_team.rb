class AddWinPctToTeam < ActiveRecord::Migration[5.1]
  def change
    add_column :teams, :win_percentage, :decimal
  end
end
