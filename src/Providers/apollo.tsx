import React from 'react';

import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';


const link = createUploadLink({
    uri: 'http://localhost:9090/graphql'
})


const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})

const Provider: React.FC<React.ReactNode> = ({ children }) => {

    return(
        <ApolloProvider client={client}>
            { children }
        </ApolloProvider>
    );
}


export default Provider;