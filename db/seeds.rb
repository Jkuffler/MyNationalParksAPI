require 'csv'

puts "seeding parks..."

CSV.foreach('parks.csv') do |row|
    name = row[0]
    image_url = row[1]
    location = row[2]
    date_established = row[3]
    area = row[4]
    description = row[5]
    NationalPark.create(name: name, image_url: image_url, location: location, date_established: date_established, area: area, description: description)
end

User.create(user_name: "Jason", password: "password", bio: "i love tacos")
User.create(user_name: "David", password: "password", bio: "i love tacos")

Visit.create(national_park: NationalPark.all.sample, user: User.all.sample, date: "2019/12/1")
Visit.create(national_park: NationalPark.all.sample, user: User.all.sample, date: "2009/10/2")
Visit.create(national_park: NationalPark.all.sample, user: User.all.sample, date: "2018/12/1")
Visit.create(national_park: NationalPark.all.sample, user: User.all.sample, date: "2022/1/1")

puts "done seeding"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
