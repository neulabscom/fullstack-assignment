import { ApolloServer, gql } from 'apollo-server';

import posts from './posts';

import { getAuthors, getIdsOfPostsWithRedBorder } from './helpers/post';

import { Author } from './types';

let authors: Author[] = [];

getAuthors().then(data => authors = data);

const idsOfPostsWithredBorder = getIdsOfPostsWithRedBorder(posts, 3);

const typeDefs = gql`
  type Author {
    avatarUrl: String
    email: String
    id: ID
    name: String
  }

  type Post {
    author: Author
    body: String
    category: String
    coverUrl: String
    date: String
    hasRedBorder: Boolean
    id: ID
    title: String
    userId: ID
  }

  type Query {
    posts: [Post]
  }
`;

const resolvers = {
  Author: {
    avatarUrl: (parent: {id: number }) => {
      return `https://randomuser.me/api/portraits/men/${parent.id}.jpg`;
    }
  },

  Post: {
    author: (parent: { userId: number }) => {
      return authors.find(({id}) => +id === parent.userId)
    },

    coverUrl: (parent: { id: number }) => {
      return `https://picsum.photos/id/${parent.id}/360/140`;
    },

    hasRedBorder: (parent: { id: number }) => {
      return idsOfPostsWithredBorder.includes(parent.id);
    }
  },
  
  Query: {
    posts: () => posts,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
