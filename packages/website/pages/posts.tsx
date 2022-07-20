import { gql, useQuery } from '@apollo/client';
import {css} from '@emotion/css';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import postUX from '../components/post';

const GET_POSTS_AND_USERS = gql`
  query GetPosts {
    posts {
      id
      title
      body
      userId
    },
   
    users {
      id
      name
      email
    }
  }
`;

type Post={
  id:string;
  title:string;
  body:string;
  userId:string;
}

const shortThree=(data:{posts:Array<Post>})=>{
  const sums:Array<number>=[]
  const posts=data.posts
  for (let index = 0; index < posts.length-2; index++) {
    sums.push(posts[index].title.length+posts[index].title.length+posts[index].title.length)
  }
  return sums.indexOf(Math.min(...sums))
}

const Posts: NextPage = () => {
  const [red,setRed] = useState(-1)
  const { data } = useQuery(GET_POSTS_AND_USERS,{onCompleted:(data)=>{setRed(shortThree(data))}});
  return (
    <div>
      <Head>
        <title>Posts | Neulabs fullstack assignment</title>
      </Head>
      <main className={css`display:flex; flex-direction:column; align-items:center`}>
        <h1>Post list {red}</h1>
        <div className={css`
            display:grid;
            grid-template-columns:repeat(3,minmax(0,1fr));
            max-width: 72rem;
          `}>
            {data?.posts?.map((post,index) => 
              postUX({post,user:data?.users.find((user)=>user.id===post.userId),red:index>=red&&index<=red+2})
             )}
          
        </div>
      </main>
    </div>
  );
};

export default Posts;
