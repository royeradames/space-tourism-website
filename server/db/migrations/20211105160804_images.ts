import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
    .createTable("Images", table => {
        /* images of the project */
        table.increments("ImagesId")
        table.text("ImageTitle")
        table.text("ImageAltText")
        table.binary("ImageData").notNullable()
    })
    .table("Projects", table => {
        table.renameColumn("Title", "ProjectTitle")
        table.integer("HeroImg")
            .references("Images.ImagesId")
            .unsigned()
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
        table.integer("DesktopPreview")
            .references("Images.ImagesId")
            .unsigned()
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
        table.integer("MobilePreview")
            .references("Images.ImagesId")
            .unsigned()
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable("Images")
}

