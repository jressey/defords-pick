# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20181127023247) do

  create_table "conferences", force: :cascade do |t|
    t.string "name"
    t.integer "sport_id"
    t.string "api_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sport_id"], name: "index_conferences_on_sport_id"
  end

  create_table "divisions", force: :cascade do |t|
    t.string "name"
    t.string "api_id"
    t.string "abbreviation"
    t.integer "conference_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["conference_id"], name: "index_divisions_on_conference_id"
  end

  create_table "games", force: :cascade do |t|
    t.integer "home_team_id"
    t.integer "away_team_id"
    t.datetime "start_time"
    t.integer "sport_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "api_id"
  end

  create_table "sports", force: :cascade do |t|
    t.string "name"
    t.string "league_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.integer "division_id"
    t.integer "wins"
    t.integer "losses"
    t.integer "ties"
    t.integer "overtime_losses"
    t.integer "points"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "api_id"
    t.decimal "win_percentage"
    t.string "abbreviation"
    t.index ["division_id"], name: "index_teams_on_division_id"
  end

end
