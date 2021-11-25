const resolvers = {
  Query: {
    /* Find list all crew members */
    crew: (_, __, { dataSources }) => dataSources.db.getCrewMembers(),
    /* get a crew member */
    crewMember: (_, { position }, { dataSources }) =>
      dataSources.db.getCrewMember(position),
    /* Find list of all destination */
    destinations: (_, __, { dataSources }) => dataSources.db.getDestinations(),
    /* get a destination information base on the name */
    destination: (_, { planet }, { dataSources }) =>
      dataSources.db.getDestination(planet),
    /* Find list of all technolgies */
    technologies: (_, __, { dataSources }) => dataSources.db.getTechnologies(),
    /* Get detail information about a technology use for the travel */
    technology: (_, { name }, { dataSources }) =>
      dataSources.db.getTechnology(name),
    /* Find landing page data */
    home: (_, __, { dataSources }) => dataSources.db.getHomeData(),
  },
};

export default resolvers;
