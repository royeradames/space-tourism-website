import { SQLDataSource } from "datasource-sql";
import { Project } from "../portfolioTypes";

const MINUTE = 60
class TrackDB extends SQLDataSource{
    getProjects(amount: number = 10){
        /* limit amount to 100 */
        if (amount > 100) amount = 100
        /* at least return 1 portfolio */
        else if (amount <= 0 ) amount = 1

        return this.knex("Projects").limit(amount).cache(MINUTE)
    }
    getProjectById(ProjectId: Project["ProjectID"]){
        return this.knex("Projects").where({ProjectId}).first().cache(MINUTE)
    }
    async getProjectByTitle(Title: Project["Title"]){
        return this.knex("Projects").where({Title}).first().cache(MINUTE)
    }
    updateProject( args: Project){
        /* wrap the data that will be update to the specify key */
        const {ProjectID, ...portfolioData} = args
        /* update database */
        this.knex("Projects").where(ProjectID).update(portfolioData).returning("*").first().cache(MINUTE)
        const project = this.knex("Projects").where(ProjectID).first().cache(MINUTE)
        return project
    }
    newProject(args: Project){
        const newProjectID = this.knex("Projects").insert(args).first().cache(MINUTE)
        return this.knex("Projects").where({ProjectID: newProjectID}).first().cache(MINUTE)
    }
    deleteProject(id:Project["ProjectID"]){
        const deleteProject = this.knex("Projects").where({ProjectID: id}).first().cache(MINUTE)
        this.knex("Projects").where({ProjectID: id}).del().returning("*").cache(MINUTE)
        return deleteProject
    }
    getImage(ImagesId:number){
        return this.knex("Images").where({ImagesId}).first().cache(MINUTE)
    }
    async addProjectImages(projectId, newImages){
        /* insert new images into the images table */
        const imagesIds = await this.knex("Images").insert(newImages).cache(MINUTE)
        /* add ids to the project image fields */
        await this.knex("Projects").insert(imagesIds).where(projectId).cache(MINUTE)
        
        return this.knex("Projects").where(projectId).cache(MINUTE)
    }

}

export default TrackDB