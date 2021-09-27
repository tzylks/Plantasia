class PolyCart < ApplicationRecord
  belongs_to :user
  belongs_to :cartable, polymorphic: true
end
