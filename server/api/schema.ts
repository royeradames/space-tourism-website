import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    "List all crew members"
    crew: [CrewMember!]!
    "A crew member"
    crewMember(position: String!): CrewMember
    "List of all destination"
    destinations: [Destination!]!
    "Information about a planet that can be traveled too"
    destination(planet: String!): Destination
    "List of all technologies"
    technologies: [Technology!]!
    "A technology used for space travel"
    technology(name: String!): Technology
    "Information for the landing page"
    home: Home
  }
`;
export default typeDefs;
