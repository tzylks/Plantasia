# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_05_213952) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.integer "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
  end

  create_table "plants", force: :cascade do |t|
    t.string "name"
    t.string "lighting"
    t.integer "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.integer "height"
  end

  create_table "poly_carts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "cartable_type", null: false
    t.bigint "cartable_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cartable_type", "cartable_id"], name: "index_poly_carts_on_cartable"
    t.index ["user_id"], name: "index_poly_carts_on_user_id"
  end

  create_table "tools", force: :cascade do |t|
    t.string "name"
    t.string "price"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_carts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "plant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "book_id", null: false
    t.bigint "tool_id", null: false
    t.index ["book_id"], name: "index_user_carts_on_book_id"
    t.index ["plant_id"], name: "index_user_carts_on_plant_id"
    t.index ["tool_id"], name: "index_user_carts_on_tool_id"
    t.index ["user_id"], name: "index_user_carts_on_user_id"
  end

  create_table "user_plants", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "plant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["plant_id"], name: "index_user_plants_on_plant_id"
    t.index ["user_id"], name: "index_user_plants_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "name"
    t.string "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "poly_carts", "users"
  add_foreign_key "user_carts", "books"
  add_foreign_key "user_carts", "plants"
  add_foreign_key "user_carts", "tools"
  add_foreign_key "user_carts", "users"
  add_foreign_key "user_plants", "plants"
  add_foreign_key "user_plants", "users"
end
