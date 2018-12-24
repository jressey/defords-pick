class TeamSerializer < ActiveModel::Serializer
  attributes *Team.column_names, :record, :sport
end
