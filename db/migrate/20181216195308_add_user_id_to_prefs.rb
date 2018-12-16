class AddUserIdToPrefs < ActiveRecord::Migration[5.1]
  def change
    add_column :user_preferences, :user_id, :integer
  end
end
