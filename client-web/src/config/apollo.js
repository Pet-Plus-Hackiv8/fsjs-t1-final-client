import { ApolloClient, InMemoryCache } from '@apollo/client';
// const { createUploadLink } = require('apollo-upload-client')

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    // link: createUploadLink()
});

export default client;