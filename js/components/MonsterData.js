import React from 'react';
import { Text, View } from 'react-native';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

const MonsterData = ({ data: {loading, monsters} }) => {
  if (loading) {
    return <Text>Loading</Text>;
  } else {
    return (
      <View>
          {
            monsters.map((m, idx) => {
              return(
                <Text key={"no" + idx}>{m.id}, {m.name}</Text>
              )
            })
          }
      </View>
    );
  }
}

const getMonsterWrapper = component => graphql(gql`
  query monster {
    monsters {
      id
      name
      img_src
    }
  }
`)(component);

export default getMonsterWrapper(MonsterData);
