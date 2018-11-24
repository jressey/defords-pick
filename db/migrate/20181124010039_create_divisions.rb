class CreateDivisions < ActiveRecord::Migration[5.1]
  def change
    create_table :divisions do |t|
      t.string :name
      t.string :api_id
      t.string :abbreviation
      t.references :conference, foreign_key: true

      t.timestamps
    end
  end
end
