class RenameConf < ActiveRecord::Migration[5.1]
  def change
    rename_table :conferernces, :conferences
  end
end
