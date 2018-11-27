class AddAbbrevToTeam < ActiveRecord::Migration[5.1]
  def change
    add_column :teams, :abbreviation, :string
  end
end
