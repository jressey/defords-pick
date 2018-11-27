class DataSetup

  def self.call
    Sport.find_or_create_by(name: "Football", league_name: "NFL")
    Sport.find_or_create_by(name: "Baseball", league_name: "MLB")
    Sport.find_or_create_by(name: "Hockey", league_name: "NHL")
    Sport.find_or_create_by(name: "Basketball", league_name: "NBA")

    NFL::InboundStructureCreator.call
    NFL::InboundScheduleProcessor.call

    NHL::InboundStructureCreator.call
    NHL::InboundScheduleProcessor.call
  end

end