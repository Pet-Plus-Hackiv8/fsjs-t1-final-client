import { ApolloClient, InMemoryCache } from "@apollo/client";
// const { createUploadLink } = require('apollo-upload-client')
let url = "https://6ef7-139-228-111-126.ap.ngrok.io/graphql"
// let url = "http://localhost:4000/graphql"
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
  // link: createUploadLink()
});

export default client;
