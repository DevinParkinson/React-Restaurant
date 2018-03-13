class Menu < ApplicationRecord
  validates_uniqueness_of :item
end
