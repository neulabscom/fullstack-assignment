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
            width: 100%;
          }

          img.logo {
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
        <img className="logo" src="logo.svg" alt="neulabs logo" />
        <h1>Welcome to Neulabs fullstack assignment</h1>
        <p>
          In the{' '}
          <Link href="/posts">
            <a>posts</a>
          </Link>{' '}
          page you will see a (very basic) list of posts. All posts are fetched
          via graphql query from a BFF layer: the BFF itself retrieves the posts
          from a (mocked) posts datasource.
        </p>
        <hr />
        <h2>Step 1:</h2>
        <p>
          Every post inside the datasource contains a <code>userId</code> field
          that maps the id of the user author of the post with the user objects
          published at this URL:{' '}
          <code>https://jsonplaceholder.typicode.com/users</code>. You will have
          to show the name and email of the author alongside with the other
          information inside the posts list.
        </p>
        <ul>
          <li>Pay no attention to the UI, at least for now :)</li>
          <li>
            *DO NOT* fetch the rest api directly from the client: attach the new
            datasource to the BFF instead
          </li>
          <li>
            *DO NOT* mock data inside the BFF as we did for the posts list: use
            Apollo rest datasources instead
          </li>
          <li>Do not change the post list mocked in the bff</li>
          <li>Do not change posts resolver</li>
          <li>
            Pay no attention to SSR or any other production related stuff, like
            env variables, etc
          </li>
        </ul>
        <hr />
        <h2>Step 2:</h2>
        <p>
          Stylize the posts page replicating the UI of the "Ultimi articoli"
          section of the VitaVi website magazine (
          <a href="https://www.vitavi.it/magazine/">
            https://www.vitavi.it/magazine
          </a>
          ) using the approach you prefer (using a css-in-js library like
          Emotion is considered a plus). Separate the UI components into a
          folder with at least a <code>Post</code> component. (use{' '}
          <code>https://randomuser.me/api/portraits/men/--userId--.jpg</code>{' '}
          for the author's avatar image and <code>https://picsum.photos/</code>{' '}
          random images for the cover).
          <img src="last-posts-ui.png" alt="neulabs logo" />
        </p>
        <hr />
        <h2>Step 3:</h2>
        <p>
          Apply a 3px red border to the triplet of adjacent posts with the
          shortest possible title length sum.
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
          If there are several equal short triplets the algorithm should return
          the index of the first triplet. You can assume that the list length is
          at least 3. Only for this part of the assignment limit to use only the
          for statement. Performance matters.
        </p>
      </main>
    </div>
  );
};

export default Home;
