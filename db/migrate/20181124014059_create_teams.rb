class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.references :division, foreign_key: true
      t.integer :wins
      t.integer :losses
      t.integer :ties
      t.integer :overtime_losses
      t.integer :points

      t.timestamps
    end
  end
end
