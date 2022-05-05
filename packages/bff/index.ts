import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloServer, gql } from 'apollo-server';
import posts from './posts';
import fetch from 'cross-fetch';

type User = {
  id: number,
  email: string,
  name: string
}

const typeDefs = gql`
  type User {
    id: ID,
    email: String,
    name: String
  }

  type Post {
    id: ID
    title: String
    body: String
    user: User
  }

  type Query {
    posts: [Post]
  }
`;

const URI = 'https://jsonplaceholder.typicode.com/';

const getUserById = (id: number) => {
  const user = fetch(URI + "users/" + id).then(async (res) => await res.json());
  return user as Promise<User>;
}

const resolvers = {
  Query: {
    posts: async () => {
      const retrieveUserPromises: Promise<User>[] = [];
      posts.forEach(post => {
        if (retrieveUserPromises[post.userId] === undefined) {
          retrieveUserPromises[post.userId] = getUserById(post.userId);
        }
      })

      const userDetails: User[] = await Promise.all(retrieveUserPromises);
      posts.forEach((post: any) => {
        const userOfPost = userDetails[post.userId];
        post.user = {
          id: userOfPost.id,
          email: userOfPost.email,
          name: userOfPost.name
        }
      })
      return posts
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
