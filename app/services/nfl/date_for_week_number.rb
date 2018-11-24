class NFL::DateForWeekNumber

  def self.call(week_number)
    return dat[week_number]
  end

  def self.dat
    {
    1 => {
      start_day: Date.new(2018, 9, 4),
      end_day: Date.new(2018, 9, 11)
    },
    2 => {
      start_day: Date.new(2018, 9, 11),
      end_day: Date.new(2018, 9, 18)
    },
    3 => {
      start_day: Date.new(2018, 9, 18),
      end_day: Date.new(2018, 9, 25)
    },
    4 => {
      start_day: Date.new(2018, 9, 25),
      end_day: Date.new(2018, 10,2)
    },
    5 => {
      start_day: Date.new(2018, 10,2),
      end_day: Date.new(2018, 10, 9)
    },
    6 => {
      start_day: Date.new(2018, 10, 9),
      end_day: Date.new(2018, 10, 16)
    },
    7 => {
      start_day: Date.new(2018, 10, 16),
      end_day: Date.new(2018, 10, 23)
    },
    8 => {
      start_day: Date.new(2018, 10, 23),
      end_day: Date.new(2018, 10, 30)
    },
    9 => {
      start_day: Date.new(2018, 10, 30),
      end_day: Date.new(2018, 11, 6)
    },
    10 => {
      start_day: Date.new(2018, 11, 6),
      end_day: Date.new(2018, 11, 13)
    },
    11 => {
      start_day: Date.new(2018, 11, 13),
      end_day: Date.new(2018, 11, 20)
    },
    12 => {
      start_day: Date.new(2018, 11, 20),
      end_day: Date.new(2018, 11, 27)
    },
    13 => {
      start_day: Date.new(2018, 11, 27),
      end_day: Date.new(2018, 12, 4)
    },
    14 => {
      start_day: Date.new(2018, 12, 4),
      end_day: Date.new(2018, 12, 11)
    },
    15 => {
      start_day: Date.new(2018, 12, 11),
      end_day: Date.new(2018, 9, 18)
    },
    16 => {
      start_day: Date.new(2018, 9, 18),
      end_day: Date.new(2018, 12, 25)
    },
    17 => {
      start_day: Date.new(2018, 12, 25),
      end_day: Date.new(2018, 1, 2)
    },
  }
  end
end