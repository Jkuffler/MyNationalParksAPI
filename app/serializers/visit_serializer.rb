class VisitSerializer < ActiveModel::Serializer
  attributes :id, :date, :description
  has_one :national_park
end
