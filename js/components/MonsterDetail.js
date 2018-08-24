import React, { Component } from 'react';
import { Text, TextInput, View, Image } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { LoadingView, ErrorView } from './FetchingViews';

const GET_MONSTER_BY_ID = id => gql`
  {
    monster(id: ${id}) {
      id
      name
      img_src
    }
  }
`;

class MonsterDetail extends Component {
  render () {
    return (
      <Query query={GET_MONSTER_BY_ID(this.props.selected)}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingView {...this.props}/>;
          if (error) return <ErrorView error={error} props={this.props}/>;

          return (
            <View {...this.props}>
              <Text>ずかんNo. {data.monster.id}</Text>
              <Text>なまえ {data.monster.name}</Text>
              <Text>画像</Text>
              <Image
                style={{width: 150, height: 150}}
                source={{uri: data.monster.img_src}}
              />
            </View>
          );
        }}
      </Query>
    );
  }
}

export { MonsterDetail };
