import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_API_URL || "http://localhost:4000/graphql", // Server URL (must be absolute)
    credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
    fetch,
  }),
  cache: new InMemoryCache().restore({}),
});
