import { SQLDataSource } from "datasource-sql";

const MINUTE = 60;
class TrackDB extends SQLDataSource {
  getCrewMembers() {
    return this.knex("crew").cache(MINUTE);
  }
}

export default TrackDB;
