class CreatePolyCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :poly_carts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.references :cartable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
