import { SQLDataSource } from "datasource-sql";

const MINUTE = 60;
class TrackDB extends SQLDataSource {
  getCrewMembers() {
    return this.knex("crew").cache(MINUTE);
  }
  getCrewMember(position: string) {
    return this.knex("crew").where({ position }).first().cache(MINUTE);
  }
  getDestinations() {
    return this.knex("destination").cache(MINUTE);
  }
  getDestination(name: string) {
    return this.knex("destination").where({ name }).first().cache(MINUTE);
  }
}

export default TrackDB;
