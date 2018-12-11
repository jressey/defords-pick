class DestroyUserAbomination < ActiveRecord::Migration[5.1]
  def change
    drop_table :users
    drop_table :jwt_blacklists
  end
end
