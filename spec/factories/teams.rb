FactoryBot.define do
  factory :team do
    win_percentage { Faker::Number.decimal(0, 3) }
  end
end