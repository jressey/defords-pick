class DataUpdate

  def self.call
    NFL::StructureUpdater.call
    sleep 2
    NHL::StructureUpdater.call
    sleep 2
    NBA::StructureUpdater.call
  end

end