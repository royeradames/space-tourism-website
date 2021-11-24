import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
    .createTable("Projects", table => {
        // portfolio detail
        table.increments("ProjectId")
        table.text("Title").notNullable()
        table.text("Intro")
        table.text("JobTitle")
        table.text("Background")
        table.text("Techstack")
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable("Projects")
}
