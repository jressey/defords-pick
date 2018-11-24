class NHL::DataService

  self << class

  def process_league_data
    # get and save leage if not exists
    # get and save confs if not exists, link to league
    # get and save divisions if not exists, link to confs
    # get and save teams if not exists, link to confs
  end

  def dat
    @dat || NhlHttpClient.getStandings
  end

  def parse_request()
  end

  def parse_teams()
    # dat["conferences"][0]["divisions"][0]["teams"][0]
  end

  end
end