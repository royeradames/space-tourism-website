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
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("crew").dropTable("destination");
}
