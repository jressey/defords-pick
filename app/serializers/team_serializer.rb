class TeamSerializer < ActiveModel::Serializer
  attributes *Team.column_names
end
