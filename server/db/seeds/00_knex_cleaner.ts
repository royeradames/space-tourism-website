import { Knex } from "knex";
const cleaner = require("knex-cleaner")

export async function seed(knex: Knex): Promise<void> {
   /* a recent version of sqlite3 borke knex-cleaner functionality when foreign keys are enabled, so we're temporarily disabling foreign keys when running the seeds against sqlite3. */
    if (knex.client.config.cleint == "sqlite3"){
        return knex.raw("PRAGMA foreign_key = OFF;").then(() => cleanTables(knex))
    }
    else{
        return cleanTables(knex)
    }
};

function cleanTables(knex: Knex){
    return cleaner.clean(knex, {
        mode: "truncate",
        restartIdentify: true, // ask Postgresql to reset the primary keys back to 0
        ignoreTables: ["knex_migrations", "knex_migrations_lock"],
    })
}