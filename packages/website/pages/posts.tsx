import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styled from '@emotion/styled'
import postUX from '../components/post';

const GET_POSTS_AND_USERS = gql`
  query GetPosts {
    posts {
      id
      title
      body
      category
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
  category:string;
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

const Page=styled.main`display:flex; flex-direction:column; align-items:center`
const Grid=styled.div`display:grid;grid-template-columns:repeat(3,minmax(0,1fr));max-width: 72rem;`

const Posts: NextPage = () => {
  const [red,setRed] = useState(-1)
  const { data } = useQuery(GET_POSTS_AND_USERS,{onCompleted:(data)=>{setRed(shortThree(data))}});
  return (
    <div>
      <Head>
        <title>Posts | Neulabs fullstack assignment</title>
      </Head>
      <Page>
        <h1>Post list {red}</h1>
        <Grid>
            {data?.posts?.map((post,index) => 
              postUX({post,user:data?.users.find((user)=>user.id===post.userId),red:index>=red&&index<=red+2})
             )}
          
        </Grid>
      </Page>
    </div>
  );
};

export default Posts;
