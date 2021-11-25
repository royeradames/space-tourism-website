import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("crew", (table) => {
      table.increments("crewId");
      table.text("position");
      table.text("name");
      table.text("bio");
      table.text("img");
    })
    .createTable("destination", (table) => {
      table.increments("destinationId");
      table.text("name");
      table.text("message");
      table.text("distance");
      table.text("time");
      table.text("img");
    })
    .createTable("technology", (table) => {
      table.increments("technologyId");
      table.text("name");
      table.text("bio");
      table.text("imgLandscape");
      table.text("imgPortrait");
    })
    .createTable("home", (table) => {
      table.increments("homeId");
      table.text("title");
      table.text("titleSpan");
      table.text("message");
      table.text("action");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable("crew")
    .dropTable("destination")
    .dropTable("technology")
    .dropTable("home");
}
