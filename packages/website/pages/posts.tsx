import Head from 'next/head';

import { gql, useQuery } from '@apollo/client';

import { Post } from '../components/Post';

import type { NextPage } from 'next';
import type { QueryPost } from '../types/post';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      author {
        avatarUrl
        id
        email
        name
      }
      body
      category
      coverUrl
      date
      hasRedBorder
      id
      title
    }
  }
`;

const Posts: NextPage = () => {
  const { data: { posts = [] } = {} } = useQuery<QueryPost>(GET_POSTS);

  return (
    <div>
      <Head>
        <title>Posts | Neulabs fullstack assignment</title>
      </Head>
      <main className="flex flex-col w-full">
        <h1
          className={`
            mx-auto
            my-12
            font-semibold
            text-4xl
            font-comfortaa
            text-greenDark
          `}
        >
          Posts list
        </h1>
        <div
          className={`
            px-6
            mx-auto
            my-2
            max-w-6xl
            grid
            grid-cols-1
            gap-x-10
            gap-y-14
            sm:px-20
            md:px-24
            md:grid-cols-2
            lg:px-16
            lg:grid-cols-3
            lg:gap-x-14
          `}
        >
          {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
      </main>
    </div>
  );
};

export default Posts;
