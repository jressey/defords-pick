namespace :data_updater do
  desc "TODO"
  task hockey: :environment do
  end

  desc "TODO"
  task football: :environment do
    NFL::StructureUpdater.call
  end

  desc "TODO"
  task basketball: :environment do
  end

  desc "TODO"
  task baseball: :environment do
  end

  task all: :environment do
    Sport.find_or_create_by(name: "Football", league_name: "NFL")
    Sport.find_or_create_by(name: "Baseball", league_name: "MLB")
    Sport.find_or_create_by(name: "Hockey", league_name: "NHL")
    Sport.find_or_create_by(name: "Basketball", league_name: "NBA")

    NFL::StructureProcessor.call
    NFL::ScheduleProcessor.call

    NHL::StructureProcessor.call
    NHL::ScheduleProcessor.call
  end

end
