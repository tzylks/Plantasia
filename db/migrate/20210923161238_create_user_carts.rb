class CreateUserCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :user_carts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :plant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
