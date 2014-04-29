class CreateSeats < ActiveRecord::Migration
  def change
    create_table :seats do |t|
      t.string :column_row
      t.integer :flight_id
      t.boolean :available
      t.timestamps
    end
  end
end
