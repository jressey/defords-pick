class CreateConferences < ActiveRecord::Migration[5.1]
  def change
    create_table :conferences do |t|
      t.string :name
      t.references :sport, foreign_key: true
      t.string :api_id

      t.timestamps
    end
  end
end
