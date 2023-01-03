import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import React from 'react';
import client from '../lib/apollo';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
