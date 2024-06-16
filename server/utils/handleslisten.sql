CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "email" varchar NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "password" varchar NOT NULL,
  "created_date" timestamp NOT NULL,
  "active" bool
);

CREATE TABLE "friends" (
  "user_id" int,
  "related_user_id" int
);

CREATE TABLE "shopping_lists" (
  "id" SERIAL PRIMARY KEY,
  "users" int
);

CREATE TABLE "shoppling_list_items" (
  "shopping_list_id" int,
  "item" varchar NOT NULL,
  "quantity" int
);

ALTER TABLE "friends" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "friends" ADD FOREIGN KEY ("related_user_id") REFERENCES "users" ("id");

ALTER TABLE "shopping_lists" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "shoppling_list_items" ADD FOREIGN KEY ("shopping_list_id") REFERENCES "shopping_lists" ("id");
