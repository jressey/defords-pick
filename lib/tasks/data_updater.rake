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

  task create_all: :environment do
    DataCreate.call
  end

  task update_all: :environment do
    DataUpdate.call
  end

end
