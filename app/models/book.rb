class Book < ApplicationRecord
    has_many :user_carts
    has_many :poly_carts, as: :cartable
end
