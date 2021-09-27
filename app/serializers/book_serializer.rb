class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :price, :image
end
