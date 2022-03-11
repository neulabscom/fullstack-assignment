import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage | Neulabs fullstack assignment</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* don't do this for you styling please :) */}
      <style>
        {`
          body {
            font-family: inter, sans-serif;
            color: #111;
            line-height: 1.5;
          }

          main {
            max-width: 800px;
            margin: auto;
          }

          img {
            display: block;
            width: 240px;
            margin: 50px auto;
          }

          p, ul {
            color: #333;
          }

          a {
            color: #111;
            font-weight: 900;
          }

          `}
      </style>
      <main>
        <img src="logo.svg" alt="neulabs logo" />
        <h1>Welcome to Neulabs fullstack assignment</h1>
        <p>
          In the{' '}
          <Link href="/posts">
            <a>posts</a>
          </Link>{' '}
          page you can see a list of post. Posts are fetched with a graphql
          query from the bff. On the bff the list of posts is mocked.
        </p>
        <h2>Step 1:</h2>
        <p>
          For each post there is a userId field that represents the id of the
          user author of the post. Currently it is not asked by the client and
          is not shown, instead we would like to show the name and email of the
          author by taking it from this rest api:{' '}
          <code>https://jsonplaceholder.typicode.com/users</code>
        </p>
        <ul>
          <li>
            Do not care about the UI now, will be asked in the next step of the
            assignment{' '}
          </li>
          <li>
            Do not fetch the rest api directly from the client, use the bff
          </li>
          <li>
            Do not mock data in the bff, as we did, use apollo rest datasources
            instead
          </li>
          <li>Do not change the post list mocked in the bff</li>
          <li>Do not change posts resolver</li>
          <li>Add the author field inside the post object</li>
          <li>
            Do not care about SSR or any other production related stuff, like
            env variables, etc
          </li>
        </ul>
        <h2>Step 2:</h2>
        <p>
          Stylize the post page using the methodology you prefer, if you know it
          use emotion. Separate the UI components into a folder where there must
          be at least the Post component that rappresent a list item. TODO:
          inserire link grafica
        </p>
        <h2>Step 3:</h2>
        <p>
          Now we want to do a little logic exercise, unrelated to this specific
          page. Implement client-side, in the render of component that lists the
          posts, an algorithm that searches for the adjacent triplet of posts
          with the shortest possible title length sum and print in console the
          index of the beginning of the triplet.
        </p>
        <p>E.g. for list of titles:</p>
        <ul>
          <li>title one</li>
          <li>title two</li>
          <li>title three</li>
          <li>title four</li>
        </ul>
        <p>the correct triplet is</p>
        <ul>
          <li>title one</li>
          <li>title two</li>
          <li>title three</li>
        </ul>
        <p>
          and algorithm should return 0, which is the index of the triplet that
          includes the first 3 titles. If there are several equal short triplets
          the algorithm should return the index of the first triplet. You can
          assume that the list length is at lest 3. Only for this part of the
          assignment limit to use only the for statement. Performance matters.
        </p>
      </main>
    </div>
  );
};

export default Home;
