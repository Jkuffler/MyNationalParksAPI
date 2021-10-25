class NationalParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :location, :date_established, :area, :description
end
