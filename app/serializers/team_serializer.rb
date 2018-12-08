class TeamSerializer < ActiveModel::Serializer
  attributes *Team.column_names, :record, :league_abbreviation
end
