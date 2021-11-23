import { PeopleAPI } from './graphql/people-api';
import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import { BaseRedisCache } from 'apollo-server-cache-redis';
import Redis from 'ioredis';
const server = new ApolloServer({
    typeDefs, 
    resolvers,
    introspection:true,
    // cache: new BaseRedisCache({
    //     client: new Redis({
    //       host: 'redis-server',
    //     }),
    //   }),
    dataSources: () => ({
        peopleAPI: new PeopleAPI()
      })});

server.listen({ port: process.env.PORT || 4000 }).then(({url}:{url: string}) => {
    console.log(`Server listening at ${url}`);
})

