class PolyCartSerializer < ActiveModel::Serializer
  attributes :id, :cartable
  has_one :user
  has_one :cartable
end
