import React from 'react';
import { Text, View } from 'react-native';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

const UserData = ({ data: data }) => {
  if (loading) {
    return <Text style={styles.outer}>Loading</Text>;
  } else {
    return (
      <View>
        <Text>
          {data}
        </Text>
      </View>
    );
  }
}

const getUserGraphQLWrapper = component => graphql(gql`
  query allPosts {
    posts {
      id
      title
      votes
      author {
        id
        firstName
        lastName
      }
    }
  }
`)(component);

export default getUserGraphQLWrapper(UserData);
