class AddDescriptionToVisits < ActiveRecord::Migration[6.1]
  def change
    add_column :visits, :description, :text
  end
end
