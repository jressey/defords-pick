namespace :data_updater do
  desc "TODO"
  task hockey: :environment do
  end

  desc "TODO"
  task football: :environment do
    NFL::InboundStructureUpdater.call
  end

  desc "TODO"
  task basketball: :environment do
  end

  desc "TODO"
  task baseball: :environment do
  end

end
