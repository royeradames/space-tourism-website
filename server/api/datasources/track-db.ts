import { SQLDataSource } from "datasource-sql";

const MINUTE = 60;
class TrackDB extends SQLDataSource {
  getCrewMembers() {
    return this.knex("crew").cache(MINUTE);
  }
  getCrewMember(position: string) {
    return this.knex("crew").where({ position }).first().cache(MINUTE);
  }
}

export default TrackDB;
