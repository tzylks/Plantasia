class AddHeightToPlants < ActiveRecord::Migration[6.1]
  def change
    add_column :plants, :height, :integer
  end
end
