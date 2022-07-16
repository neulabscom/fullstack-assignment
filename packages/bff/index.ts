import { ApolloServer, gql } from 'apollo-server';
import posts from './posts';
import authors from './authors';

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    body: String
    userId: ID
  }

  type Author {
    id: ID
    name: String
    username: String
    email: String
  }

  type Query {
    posts: [Post]
    authors: [Author]
  }

`;

const resolvers = {
  Query: {
    posts: () => posts,
    authors: () => authors,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
