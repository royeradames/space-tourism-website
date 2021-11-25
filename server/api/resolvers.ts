const resolvers = {
  Query: {
    /* Find list all crew members */
    crew: (_, __, { dataSources }) => dataSources.db.getCrewMembers(),
  },
};

export default resolvers;
