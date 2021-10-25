class CreateNationalParks < ActiveRecord::Migration[6.1]
  def change
    create_table :national_parks do |t|
      t.string :name
      t.string :image_url
      t.string :location
      t.datetime :date_established
      t.float :area
      t.text :description

      t.timestamps
    end
  end
end
