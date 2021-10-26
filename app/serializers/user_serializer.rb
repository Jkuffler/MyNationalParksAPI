class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :bio
  has_many :visits
end
