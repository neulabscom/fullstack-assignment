import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Post from '../components/Post';
import styles from "../css/post.module.css";
import { Post as PostType } from '../types/post';
import { getIndexOfShortestTripletTitle } from '../utils/post';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      body
      user{
        id
        name
        email
      }
    }
  }
`;

const Posts: NextPage = () => {
  const { data } = useQuery<{ posts: PostType[] }>(GET_POSTS);

  const [indexOfShortestTriplet, setIndexOfShortestTriplet] = useState<number | undefined>();

  useEffect(() => {
    if (data) setIndexOfShortestTriplet(getIndexOfShortestTripletTitle(data.posts))
  }, [data])

  return (
    <div className={styles.container}>
      <Head>
        <title>Posts | Neulabs fullstack assignment</title>
      </Head>
      <main>
        <h1 className={styles.header}>Post list</h1>
        <div className={styles.postContainer}>
          {data?.posts?.map((post, index) => (
            <Post
              key={post.id}
              author={post.user.name}
              postID={post.id}
              authorID={post.user.id}
              category="Alimentazione"
              title={post.title}
              highlight={index >= indexOfShortestTriplet && index < indexOfShortestTriplet + 3}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts;
