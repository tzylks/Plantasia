class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :lighting, :price, :image, :height
end
