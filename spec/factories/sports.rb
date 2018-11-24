FactoryBot.define do
  factory :sport do
    name { Faker::Name.first_name }
  end
end