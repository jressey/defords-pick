class DataCreate

  def self.call
    Sport.find_or_create_by(name: "Football", league_name: "NFL")
    Sport.find_or_create_by(name: "Baseball", league_name: "MLB")
    Sport.find_or_create_by(name: "Hockey", league_name: "NHL")
    Sport.find_or_create_by(name: "Basketball", league_name: "NBA")

    NFL::StructureCreator.call
    sleep 2
    NFL::ScheduleProcessor.call
    sleep 2

    NHL::StructureCreator.call
    sleep 2
    NHL::ScheduleProcessor.call
    sleep 2
    NHL::AbbreviationProcessor.call
    sleep 2
    NBA::AbbreviationProcessor.call
  end

end