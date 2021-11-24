import {gql} from "apollo-server"

const typeDefs = gql`
    type Query{
        "Query to get a list of all projects from the portfolio."
        portfolio: [Project!]!
        "Find a project by it's ID"
        projectById (id: ID!): Project
        "Find a project by title"
        projectByTitle(title: String!): Project
    }

    type Mutation {
        "Update a project"
        updateProject( id: ID!, title: String, intro: String, jobTitle: String, background: String, techstack: String): ProjectMutation
        "Add a new project"
        newProject(title: String, intro: String, jobTitle: String, background: String, techstack: String): ProjectMutation
        "Delete a project"
        deleteProject(id:ID!): ProjectMutation
        "Add a project images"
        addProjectImages(
            projectId: ID!,
            heroImageTitle: String!, 
            heroImageAltText: String!, 
            heroImgSrc: String!,
            desktopImageTitle: String!, 
            desktopImageAltText: String!, 
            desktopImgSrc: String!,
            mobileImageTitle: String!, 
            mobileImageAltText: String!, 
            mobileImgSrc: String!,
        ): ProjectMutation
    }

    "Add mutation specific fields when mutating a project"
    type ProjectMutation {
        "Like HTTP status response code"
        code: Int!
        "Indicates whether the mutation was successful or not"
        success: Boolean!
        "Human readable message for the UI"
        message: String!
        "Newly changed project"
        project: Project
    }

    "A project is a list of project specific infromation"
    type Project{
        ProjectId: ID!
        "the project title"
        Title: String!
        "the introduction of the project"
        Intro: String
        "the work title for the project"
        JobTitle: String
        "the background information of the project"
        Background: String
        "a list of technologies used in this project"
        Techstack: String
        "Hero image for the project detail page"
        heroImg: Image
        "Image of the project in desktop size"
        desktopPreview: Image
        "Image of the project in mobile size"
        mobilePreview: Image
    }

    "Project Images"
    type Image{
        imagesId: ID!
        "the image title"
        imageTitle: String
        "The alt text of the image"
        imageAltText: String
        "The project image"
        imgSrc: String!
    }

` 
export default typeDefs