import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_MONSTERS = gql`
  {
    monsters {
      id
      name
      img_src
    }
  }
`;

class MonsterData2 extends Component {
  render () {
    return (
      <Query query={GET_MONSTERS}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error! {error.message}</Text>;

          return (
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.selected}
              onValueChange={(itemValue, itemIndex) => this.props.changeSelected(itemValue)}
            >
              {data.monsters.map(monster => (
                <Picker.Item
                  label={`${monster.id}. ${monster.name}`}
                  value={monster.id}
                  key={'key' + monster.id}
                />
              ))}
            </Picker>
          );
        }}
      </Query>
    );
  }
}

export default MonsterData2;
