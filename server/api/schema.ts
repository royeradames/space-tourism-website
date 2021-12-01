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

  "Information about the crew member"
  type CrewMember {
    crewId: ID!
    "The title of the crew"
    position: String
    "Name of the crew member"
    name: String
    "Short description of the crew member"
    bio: String
    "Crew member image"
    img: String
  }
  "Information of the destination"
  type Destination {
    destinationId: ID!
    "Name of the planet"
    name: String
    "description of the planet"
    message: String
    "Total destination distance"
    distance: String
    "Total destination time for travel"
    time: String
    "Image of the planet"
    img: String
  }
  "Detail information of the technology that it's use for the planetary travel"
  type Technology {
    technologyId: ID!
    "The technology name"
    name: String
    "The technology description"
    bio: String
    "Image fo the technology in landscape view"
    imgLandscape: String
    "Image of the technology in portrait view"
    imgPortrait: String
  }
  "landing page information"
  type Home {
    homeId: ID!
    "The title of the home page"
    title: String
    "The title emphasize word"
    titleSpan: String
    "The home page main message"
    message: String
    "The home page action button text"
    action: String
  }
`;
export default typeDefs;
