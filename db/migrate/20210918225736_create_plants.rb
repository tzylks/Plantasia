class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :lighting
      t.integer :price

      t.timestamps
    end
  end
end
