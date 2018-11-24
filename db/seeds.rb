# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Sport.destroy_all
Sport.create(name: "Football", league_name: "NFL")
Sport.create(name: "Baseball", league_name: "MLB")
Sport.create(name: "Hockey", league_name: "NHL")
Sport.create(name: "Basketball", league_name: "NBA")