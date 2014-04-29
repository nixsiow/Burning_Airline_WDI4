class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.string :name
      t.string :row
      t.string :column

      t.timestamps
    end
  end
end
