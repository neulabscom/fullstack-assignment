import { gql, useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Post from '../components/Post/Post';
import { IPostResponse } from '../models/IPosts.model';
import { highlightPosts } from '../utils/highlight-posts';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      body
      category
      date
      userId
    }
  }
`;

const postsStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 64px;
  margin: 8px 208px;
`;

const Posts: NextPage = (): JSX.Element => {
  const { data } = useQuery<IPostResponse>(GET_POSTS);
  const shortest = data && highlightPosts(data?.posts?.map(post => post.title));

  return (
    <div>
      <Head>
        <title>Posts | Neulabs fullstack assignment</title>
      </Head>
      <main>
        <h1>Post list</h1>
        <div css={postsStyle}>
          {data?.posts?.map((post, index) => (
            <Post key={post.id} post={post} highlighted={shortest.includes(index)} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts;
