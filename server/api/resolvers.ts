const resolvers = {
    Query: {
        // get a list of projects
        portfolio: (_, __, {dataSources}) =>  dataSources.db.getProjects(),
        // Find a project by ID
        projectById: (_, {id}, {dataSources}, info) => dataSources.db.getProjectById(id),
        // Find a project by the title
        projectByTitle: (_, {title}, {dataSources}) => dataSources.db.getProjectByTitle(title),
    },
    Mutation: {
        // Update the project
        updateProject: async (_, {id, title, intro, jobTitle, background, techstack}, {dataSources}) =>{ 
            
            try {
                const project = await dataSources.db.updateProject({
                ProjectID: id,
                Title: title,
                Intro: intro,
                JobTitle: jobTitle,
                Background: background,
                techstack: techstack
                })

                return {
                    code: 200,
                    success: true,
                    message: "project was successfully updated",
                    project
                }
            } catch (error) {
                return {
                    code: 400,
                    success: false,
                    message: "project fail to update",
                    project: null
                }
            }
            
        },
        // Add new project
        newProject: async (_, {title, intro, jobTitle, background, techstack}, {dataSources}) => {
            try{
                const project = await dataSources.db.newProject({
                Title: title,
                Intro: intro,
                JobTitle: jobTitle,
                Background: background,
                techstack: techstack
                })

                return {
                    code: 200,
                    success: true,
                    message: "new project was added",
                    project
                }
            }catch(error){
                return {
                    code: 400,
                    success: false,
                    message: "fail to add new project"
                }
            }
            
        },
        // delete a Project
        deleteProject: async (_, {id}, {dataSources}) => {
            try {
                const project = await dataSources.db.deleteProject(id)

                return {
                    code: 200,
                    success: true,
                    message: "project was deleted",
                    project
                }
            } catch (error) {
                return {
                    code: 400,
                    success: false,
                    message: "fail to delete project",
                    project: null
                }
            }
            
        },
        addProjectImages: async (_, {
            projectId, 
            heroImageTitle, 
            heroImageAltText, 
            heroImgSrc,
            desktopImageTitle, 
            desktopImageAltText, 
            desktopImgSrc,
            mobileImageTitle, 
            mobileImageAltText, 
            mobileImgSrc
        }, {dataSources}) => {
            try {
                const ProjectId = {
                ProjectId: projectId
            }
            const newImages = [
                {
                    ImageTitle: heroImageTitle, 
                    ImageAltText: heroImageAltText, 
                    ImageData: heroImgSrc,
                },
                {
                    ImageTitle: desktopImageTitle, 
                    ImageAltText: desktopImageAltText, 
                    ImageData: desktopImgSrc,
                },
                {
                    ImageTitle: mobileImageTitle, 
                    ImageAltText: mobileImageAltText, 
                    ImageData: mobileImgSrc,
                },
            ]
            return {
                code: 200,
                success: true,
                message: "the images where added the project",
                project: await dataSources.db.addProjectImages(ProjectId, newImages)
            }
            } catch (error) {
                return {
                    code: 400,
                    success: false,
                    message: "fail to add images to the project",
                    project: null
                }
            }
            
        }
    },
    Project: {
        Title: ({ProjectTitle}) => ProjectTitle,
        heroImg: ({HeroImg}, {dataSources}) => dataSources.db.getImage(HeroImg),
        desktopPreview: ({DesktopPreview}, {dataSources}) => dataSources.db.getImage(DesktopPreview),
        mobilePreview: ({MobilePreview}, {dataSources}) => dataSources.db.getImage(MobilePreview),
    }
}

export default resolvers