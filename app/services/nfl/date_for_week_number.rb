class NFL::DateForWeekNumber

  def self.call(week_number)
    return dat[week_number]
  end

  def self.dat
    {
    1 => {
      start_day: Date.new(2018, 9, 5),
      end_day: Date.new(2018, 9, 12)
    },
    2 => {
      start_day: Date.new(2018, 9, 12),
      end_day: Date.new(2018, 9, 19)
    },
    3 => {
      start_day: Date.new(2018, 9, 19),
      end_day: Date.new(2018, 9, 26)
    },
    4 => {
      start_day: Date.new(2018, 9, 26),
      end_day: Date.new(2018, 10, 3)
    },
    5 => {
      start_day: Date.new(2018, 10, 3),
      end_day: Date.new(2018, 10, 10)
    },
    6 => {
      start_day: Date.new(2018, 10, 10),
      end_day: Date.new(2018, 10, 17)
    },
    7 => {
      start_day: Date.new(2018, 10, 17),
      end_day: Date.new(2018, 10, 24)
    },
    8 => {
      start_day: Date.new(2018, 10, 24),
      end_day: Date.new(2018, 10, 31)
    },
    9 => {
      start_day: Date.new(2018, 10, 31),
      end_day: Date.new(2018, 11, 7)
    },
    10 => {
      start_day: Date.new(2018, 11, 7),
      end_day: Date.new(2018, 11, 14)
    },
    11 => {
      start_day: Date.new(2018, 11, 14),
      end_day: Date.new(2018, 11, 21)
    },
    12 => {
      start_day: Date.new(2018, 11, 21),
      end_day: Date.new(2018, 11, 28)
    },
    13 => {
      start_day: Date.new(2018, 11, 28),
      end_day: Date.new(2018, 12, 5)
    },
    14 => {
      start_day: Date.new(2018, 12, 5),
      end_day: Date.new(2018, 12, 12)
    },
    15 => {
      start_day: Date.new(2018, 12, 12),
      end_day: Date.new(2018, 12, 19)
    },
    16 => {
      start_day: Date.new(2018, 12, 19),
      end_day: Date.new(2018, 12, 26)
    },
    17 => {
      start_day: Date.new(2018, 12, 26),
      end_day: Date.new(2018, 1, 2)
    },
  }
  end
end