import React from "react";
import { createRoot } from "react-dom/client";
import {ApolloClient, InMemoryCache,ApolloProvider} from '@apollo/client'
import {AppProvider}  from './Context';
import {App} from './App'

const client = new ApolloClient({
    uri: "https://16-react-advanced-luiznaiper.vercel.app/graphql",
    cache: new InMemoryCache(),
  });

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
<AppProvider>
<ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
</AppProvider>
);