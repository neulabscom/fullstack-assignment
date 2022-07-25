import { ApolloServer, gql } from 'apollo-server';

import posts from './posts';

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    body: String
    userId: ID
  }

  type Query {
    posts: [Post]
  }
`;

const resolvers = {
  Query: {
    posts: () => posts,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
