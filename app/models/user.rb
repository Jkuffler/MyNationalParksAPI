class User < ApplicationRecord
    has_many :visits
    has_many :national_parks, through: :visits

    validates :user_name, uniqueness: true, presence: true
    has_secure_password
end
