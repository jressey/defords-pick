require 'rails_helper'

RSpec.describe NFL::WeekNumberForDate do
  it "works" do
    expect(NFL::WeekNumberForDate.call(Date.new(2018, 11, 24))).to eq(12)
  end
end
