import React, { Component } from 'react';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const SERVER_URI = 'https://monsters-gql.herokuapp.com/graphql';

const ApolloClientHOC = WrappedComponent =>
  class extends Component {
    render () {
      const client = new ApolloClient({
        link: createHttpLink({ uri: SERVER_URI }),
        cache: new InMemoryCache()
      });

      return (
        <ApolloProvider client={client}>
          <WrappedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  }

export { ApolloClientHOC };
