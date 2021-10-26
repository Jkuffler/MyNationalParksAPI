class VisitSerializer < ActiveModel::Serializer
  attributes :id, :date
  has_one :national_park
  has_one :user
end
