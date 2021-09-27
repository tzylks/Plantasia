class UserPlantSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_many :plants
end
