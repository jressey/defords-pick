class RollbackUserChanges < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :name
    remove_column :users, :password
  end
end
