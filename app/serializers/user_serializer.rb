class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :poly_carts
 
  has_many :poly_carts
end
