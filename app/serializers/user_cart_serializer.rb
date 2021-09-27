class UserCartSerializer < ActiveModel::Serializer
  attributes :id, :plant, :book, :tool
  has_one :user
  has_one :plant
  has_one :book
  has_one :tool
end
