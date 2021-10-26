class User < ApplicationRecord
    validates :user_name, uniqueness: true, presence: true
    has_secure_password
end
