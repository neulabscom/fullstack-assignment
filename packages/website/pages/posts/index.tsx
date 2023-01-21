/** @jsxImportSource @emotion/react */
import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import Post from '../../components/Post';
import { Table } from '../../components/Table';
import { PostWithUser } from '../../types';
import { addUserInfo, findShortestTriplet } from '../../utils';
import { styledTitle, stylesContainer } from './styles';

const GET_POSTS_AND_USERS = gql`
  query GetPosts {
    posts {
      id
      title
      category
      date
      userId
    }

    users {
      id
      name
      email
    }
  }
`;

const Posts: NextPage = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_POSTS_AND_USERS);
  const [postsWithUsers, setPostsWithUsers] = useState([]);
  const [triplet, setTriplet] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setPostsWithUsers(addUserInfo(data.users, data.posts));
    }
  }, [data]);

  useEffect(() => {
    if (!loading && !error && postsWithUsers.length) {
      setTriplet(findShortestTriplet(postsWithUsers));
    }
  }, [postsWithUsers]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong, please try later</div>}
      {data && (
        <>
          <Head>
            <title>Posts | Neulabs fullstack assignment</title>
          </Head>
          <main css={stylesContainer}>
            <h1 css={styledTitle}>Ultimi Articoli</h1>
            <Table>
              {triplet.length &&
                postsWithUsers.map((postWithUser: PostWithUser, i) => {
                  let border;
                  if (
                    postWithUser.post.id === triplet[0].post.id ||
                    postWithUser.post.id === triplet[1].post.id ||
                    postWithUser.post.id === triplet[2].post.id
                  ) {
                    border = true;
                  }
                  return (
                    <Post
                      border={border || false}
                      data={postWithUser}
                      key={i}
                    />
                  );
                })}
            </Table>
          </main>
        </>
      )}
    </div>
  );
};

export default Posts;
