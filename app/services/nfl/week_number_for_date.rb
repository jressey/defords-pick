class NFL::WeekNumberForDate
  class << self

    def call(date)
      if (Date.new(2018, 9, 4)..Date.new(2018, 9, 11)).include?(date)
        1
      elsif (Date.new(2018, 9, 11)..Date.new(2018, 9, 18)).include?(date)
        2
      elsif (Date.new(2018, 9, 18)..Date.new(2018, 9, 25)).include?(date)
        3
      elsif (Date.new(2018, 9, 25)..Date.new(2018, 10,2)).include?(date)
        4
      elsif (Date.new(2018, 10, 2)..Date.new(2018, 10, 9)).include?(date)
        5
      elsif (Date.new(2018, 10, 9)..Date.new(2018, 10, 16)).include?(date)
        6
      elsif (Date.new(2018, 10, 16)..Date.new(2018, 10, 23)).include?(date)
        7
      elsif (Date.new(2018, 10, 23)..Date.new(2018, 10, 30)).include?(date)
        8
      elsif (Date.new(2018, 10, 30)..Date.new(2018, 11, 6)).include?(date)
        9
      elsif (Date.new(2018, 11, 6)..Date.new(2018, 11, 13)).include?(date)
        10
      elsif (Date.new(2018, 11, 13)..Date.new(2018, 11, 20)).include?(date)
        11
      elsif (Date.new(2018, 11, 20)..Date.new(2018, 11, 27)).include?(date)
        12
      elsif (Date.new(2018, 11, 27)..Date.new(2018, 12, 4)).include?(date)
        13
      elsif (Date.new(2018, 12, 4)..Date.new(2018, 12, 11)).include?(date)
        14
      elsif (Date.new(2018, 12, 11)..Date.new(2018, 9, 18)).include?(date)
        15
      elsif (Date.new(2018, 12, 18)..Date.new(2018, 12, 25)).include?(date)
        16
      else
        17
      end
    end
  end
end