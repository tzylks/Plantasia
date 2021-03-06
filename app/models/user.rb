class User < ApplicationRecord
    has_secure_password
    has_many :user_plants
    has_one :user_cart
    has_many :plants, through: :user_cart
    has_many :tools, through: :user_cart
    has_many :books, through: :user_cart
    has_many :poly_carts
    validates :username, presence: true
    validates :password, presence: true
    validates :email, presence: true
    validates :username, uniqueness: true
end

