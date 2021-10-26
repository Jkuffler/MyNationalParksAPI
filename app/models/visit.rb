class Visit < ApplicationRecord
  belongs_to :national_park
  belongs_to :user

  validate :date, :date_cannot_be_in_future

  def date_cannot_be_in_future
    if date.present? && date > Date.today
      errors.add(:date, "can't be in the future!")
    end
  end    

end
