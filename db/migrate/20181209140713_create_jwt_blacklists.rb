class CreateJwtBlacklists < ActiveRecord::Migration[5.1]
  def change
    create_table :jwt_blacklists do |t|
      t.string :jti, null: false

      t.timestamps
    end
  end
end
