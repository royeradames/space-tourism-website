import { ApolloServer } from "apollo-server";
import typeDefs from "./api/schema";
import resolvers from "./api/resolvers";
import TrackDB from "./api/datasources/track-db";

/* knex config object */
const knexConfig = require("./knexfile");

const environment = process.env.DB_ENV || "development";

/* initialize server */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ db: new TrackDB(knexConfig[environment]) }),
});

/* give server access */
server.listen({ port: process.env.PORT || 4000 }).then(({ port, url }) => {
  const isDevEnviroment = !process.env.PORT;
  if (isDevEnviroment)
    console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at https://studio.apollographql.com/dev or ${url}
    `);
});
