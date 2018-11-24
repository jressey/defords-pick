FactoryBot.define do
  factory :team do
    division
    win_percentage { Faker::Number.decimal(0, 3) }
  end
end