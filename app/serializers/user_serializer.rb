class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :name, :address, :plants, :tools, :books, :user_cart, :poly_carts
  has_many :plants
  has_many :tools
  has_many :books
  has_one :user_cart
  has_many :poly_carts
end
