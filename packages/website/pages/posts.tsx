import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      body
    }
  }
`;

const Posts: NextPage = () => {
  const { data } = useQuery(GET_POSTS);

  return (
    <div>
      <Head>
        <title>Posts | Neulabs fullstack assignment</title>
      </Head>
      <main>
        <h1>Post list</h1>
        {data?.posts?.map(post => (
          <article key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Posts;
