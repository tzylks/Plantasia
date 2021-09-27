class UserCart < ApplicationRecord
  belongs_to :user
  belongs_to :plant
  belongs_to :tool
  belongs_to :book
end
