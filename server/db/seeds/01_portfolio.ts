import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("Projects").insert([
        {  
            ProjectTitle: "sunnyside-agency-landing-page",
            Intro: "Landing page for Sunnyside Agency",
            JobTitle: "Front End Developer",
            Background:"I develop a landing page for the Sunnyside Agency. The were satisfy with the final results.",
            Techstack: "React / Typescript / HTML / SASS",
         },
        {  
            ProjectTitle: "contacts-CRUD",
            Intro: "Contact App.",
            JobTitle: "",
            Background:"A contact app that reads contacts, save new contacts, updates them, and deletes them.",
            Techstack: "React / Typescript / HTML / SASS",
         },
        {  
            ProjectTitle: "minimalist-portfolio-website",
            Intro: "Engineerd a portfolio template",
            JobTitle: "Full stack developer",
            Background:"Engineer a portfolio template. The front end was made according to the designer, and I also made a custom server to handle the contact form.",
            Techstack: "Gatsby / React / Typescript / HTML / SASS",
         },
    ]);
};
