const resolvers = {
  Query: {
    /* Find list all crew members */
    crew: (_, __, { dataSources }) => dataSources.db.getCrewMembers(),
    /* get a crew member */
    crewMember: (_, { position }, { dataSources }) =>
      dataSources.db.getCrewMember(position),
  },
};

export default resolvers;
