/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloServer } from 'apollo-server';
import { readFileSync } from 'fs';

import UsersApi from './apis/users-api';
import posts from './posts';

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const resolvers = {
  Query: {
    posts: () => posts,
    users: (_: any, __: any, { dataSources }: { dataSources: any }) =>
      dataSources.users.getUsers(),
  },
};

const dataSources = () => ({ users: new UsersApi() });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
