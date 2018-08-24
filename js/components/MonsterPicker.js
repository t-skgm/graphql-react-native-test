import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { graphql, ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_MONSTERS = gql`
  {
    monsters {
      id
      name
      img_src
    }
  }
`;

class MonsterPicker extends Component {
  render () {
    return (
      <Query query={GET_MONSTERS}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) {
            console.log('fetch error: ', error)
            return <Text>Error! {error.message}</Text>
          };

          return (
            <View {...this.props}>
              <Picker
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
            </View>
          );
        }}
      </Query>
    );
  }
}

export { MonsterPicker };
