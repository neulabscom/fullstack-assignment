import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
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
  console.log(data);


  return (
    <div className={styles.container}>
      <Head>
        <title>Posts | Neulabs fullstack assignment</title>
      </Head>
      <main>
        <h1>Post list</h1>
        <div className={styles.postContainer}>
          {data?.posts?.map(post => (
            <article className={styles.post} key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts;
