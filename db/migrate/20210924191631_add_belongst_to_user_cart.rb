class AddBelongstToUserCart < ActiveRecord::Migration[6.1]
  def change
    add_reference :user_carts, :book, null: false, foreign_key: true
  end
end
