class Plant < ApplicationRecord
    has_many :user_plants
    has_many :user_carts
    has_many :poly_carts, as: :cartable
end
