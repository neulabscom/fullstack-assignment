import { gql, useQuery } from '@apollo/client';
import { css } from '@emotion/css';
import type { NextPage } from 'next';
import Head from 'next/head';
import PostArticle from '../components/post-article/post-article';
import { Author } from '../interfaces/authors';
import { Post, PostWithData } from '../interfaces/posts';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      body
      userId
    }
    authors {
      id
      name
      email
    }
  }
`;

const Posts: NextPage = () => {
  const { data } = useQuery(GET_POSTS);

  const { 
    posts = [], 
    authors = [],
  }: { posts: Post[], authors: Author[] } = data || {};

    // save middle index, sum of ajacent 
    let shortestMiddleIndex: number = null;
    let shortestSum: number = 0;

    const postLength: number = posts.length - 1;
    // looping through the array, check the sum with previous and next element
    for(let i = 0; i < postLength; i++) {
      if(i > 0 && i < postLength) {
        const current: Post = posts[i];
        const prev: Post = posts[i-1];
        const next: Post = posts[i+1];

        const currentTitle: string = current.title;
        const prevTitle: string = prev.title;
        const nextTitle: string = next.title;
        const currentSum: number = currentTitle.length + prevTitle.length + nextTitle.length;
        // if is the first triplet or is shorter than the saved one, save the value and the index
        if(
          shortestSum == 0
          || (shortestSum != 0 && currentSum < shortestSum)
        ) {
          shortestSum = currentSum;
          shortestMiddleIndex = i;
        } 
      }
    }
  
  

  const postsWithAuthor: PostWithData[] = posts?.map((elem: Post, i: number) => {
    const authorId = elem.userId;
    const authorObj = authors?.find(elem => elem.id === authorId);
    const isPartOfTheTriplet = (i: number): boolean => {
      const shortI: number = shortestMiddleIndex;
      if(shortI == null) return false;
      const prevI: number =  shortI - 1;
      const nextI: number =  shortI + 1;
      return i === shortI || i === prevI || i === nextI;
    }
    const isShortest: boolean = shortestMiddleIndex !== null ? isPartOfTheTriplet(i) : false;
    return {
      ...elem,
      author: authorObj,
      isShortest,
    }
  }) || [];

  const postArticleStyle = `
    display: flex;
    flex-wrap: wrap;
  `;

  const mainStyle = `
    font-family: Comfortaa,Arial,sans-serif;
  `;


  return (
    <div>
      <Head>
        <title>Posts | Neulabs fullstack assignment</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:ital,wght@0,400&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Kumbh+Sans:ital,wght@0,400&family=Open+Sans:ital,wght@0,300;0,400;0,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={css`${mainStyle}`}>
        <h1>Post list</h1>
        <div className={css`${postArticleStyle}`}>
          {postsWithAuthor?.map((post: PostWithData, i) => (
            <PostArticle key={'article-' + i} {...post}></PostArticle>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts;
