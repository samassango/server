export const resolvers = {
        Query: {
          peoples:  (_, { page }, { dataSources }) => {
            return dataSources.peopleAPI.getListOfPeople(page);
          },
          search: (_, { search }, { dataSources }) => {
            return dataSources.peopleAPI.searchPersonByName(search);
          }
        },
      };
