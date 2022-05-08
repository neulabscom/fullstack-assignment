import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Post from '../components/Post';
import styles from "../css/post.module.css";

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
  const { data } = useQuery(GET_POSTS);

  return (
    <div className={styles.container}>
      <Head>
        <title>Posts | Neulabs fullstack assignment</title>
      </Head>
      <main>
        <h1 className={styles.header}>Post list</h1>
        <div className={styles.postContainer}>
          {data?.posts?.map(post => (
            <Post
              key={post.id}
              author={post.user.name}
              postID={post.id}
              authorID={post.user.id}
              category="Alimentazione"
              title={post.title}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts;
