class AddImageToTool < ActiveRecord::Migration[6.1]
  def change
    add_column :tools, :image, :string
  end
end
