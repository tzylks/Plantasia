class AddBelongstoToUserCart < ActiveRecord::Migration[6.1]
  def change
    add_reference :user_carts, :tool, null: false, foreign_key: true
  end
end
