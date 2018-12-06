class AddPasswordToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :name, :password
  end
end
