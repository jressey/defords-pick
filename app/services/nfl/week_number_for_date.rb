class NFL::WeekNumberForDate
  class << self

    def call(date)
      if (Date.new(2018, 9, 5)..Date.new(2018, 9, 12)).include?(date)
        1
      elsif (Date.new(2018, 9, 12)..Date.new(2018, 9, 19)).include?(date)
        2
      elsif (Date.new(2018, 9, 19)..Date.new(2018, 9, 26)).include?(date)
        3
      el sif (Date.new(2018, 9, 26)..Date.new(2018, 10, 3)).include?(date)
        4
      elsif (Date.new(2018, 10, 3)..Date.new(2018, 10, 10)).include?(date)
        5
      elsif (Date.new(2018, 10, 10)..Date.new(2018, 10, 17)).include?(date)
        6
      elsif (Date.new(2018, 10, 17)..Date.new(2018, 10, 24)).include?(date)
        7
      elsif (Date.new(2018, 10, 24)..Date.new(2018, 10, 31)).include?(date)
        8
      elsif (Date.new(2018, 10, 31)..Date.new(2018, 11, 7)).include?(date)
        9
      elsif (Date.new(2018, 11, 7)..Date.new(2018, 11, 14)).include?(date)
        10
      elsif (Date.new(2018, 11, 14)..Date.new(2018, 11, 21)).include?(date)
        11
      elsif (Date.new(2018, 11, 21)..Date.new(2018, 11, 28)).include?(date)
        12
      elsif (Date.new(2018, 11, 28)..Date.new(2018, 12, 5)).include?(date)
        13
      elsif (Date.new(2018, 12, 5)..Date.new(2018, 12, 12)).include?(date)
        14
      elsif (Date.new(2018, 12, 12)..Date.new(2018, 9, 19)).include?(date)
        15
      elsif (Date.new(2018, 12, 19)..Date.new(2018, 12, 26)).include?(date)
        16
      else
        17
      end
    end
  end
end