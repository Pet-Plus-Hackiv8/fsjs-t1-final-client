import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "https://7bb4-139-228-111-126.ap.ngrok.io/graphql",
  }),
});

export default client;
