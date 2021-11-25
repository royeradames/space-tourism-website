const resolvers = {
  Query: {
    /* Find list all crew members */
    crew: (_, __, { dataSources }) => dataSources.db.getCrewMembers(),
    /* get a crew member */
    crewMember: (_, { position }, { dataSources }) =>
      dataSources.db.getCrewMember(position),
    /* Find list of all destination */
    destinations: (_, __, { dataSources }) => dataSources.db.getDestinations(),
  },
};

export default resolvers;
