import React from 'react';
import { Text, View } from 'react-native';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

const UserData = ({ data: {loading, books} }) => {
  if (loading) {
    return <Text>Loading</Text>;
  } else {
    return (
      <View>
          {
            books.map((book, idx) => {
              return(
                <Text key={"no" + idx}>{book.author}, {book.title}</Text>
              )
            })
          }
      </View>
    );
  }
}

const getUserGraphQLWrapper = component => graphql(gql`
  query allBooks {
    books {
      title
      author
    }
  }
`)(component);

export default getUserGraphQLWrapper(UserData);
