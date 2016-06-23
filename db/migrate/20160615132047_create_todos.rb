class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :text
      t.integer :user_id

      t.timestamps null: false
    end
    add_index :todos, [:user_id, :created_at]
  end
end
