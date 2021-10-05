class CreateTools < ActiveRecord::Migration[6.1]
  def change
    create_table :tools do |t|
      t.string :name
      t.string :price
      t.string :image

      t.timestamps
    end
  end
end
