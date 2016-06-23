class AddCheckToTodos < ActiveRecord::Migration
  def change
    add_column :todos, :check, :boolean, :default => false
  end
end
