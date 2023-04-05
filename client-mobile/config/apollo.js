import { ApolloClient, InMemoryCache } from "@apollo/client";
// const { createUploadLink } = require('apollo-upload-client')

const client = new ApolloClient({
  uri: "https://b56c-139-228-111-126.ap.ngrok.io/graphql",
  cache: new InMemoryCache(),
  // link: createUploadLink()
});

export default client;
