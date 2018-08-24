import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { LoadingView, ErrorView } from './FetchingViews';

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
          if (loading) return <LoadingView {...this.props}/>;
          if (error) return <ErrorView error={error} props={this.props}/>;

          return (
            <View {...this.props}>
              <Picker
                selectedValue={this.props.selected}
                onValueChange={(itemValue, itemIndex) => this.props.changeSelected(itemValue)}
              >
                {data.monsters.map(monster => (
                  <Picker.Item
                    label={`No.${monster.id} / ${monster.name}`}
                    value={monster.id}
                    key={'item' + monster.id}
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
