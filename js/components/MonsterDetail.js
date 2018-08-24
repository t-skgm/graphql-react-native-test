import React, { Component } from 'react';
import { Text, TextInput, View, Image } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from "styled-components";
import { LoadingView, ErrorView } from './FetchingViews';

const Title = styled.Text`
  text-align: center;
  color: #707070;
  margin: 5px;
`;
const Val = styled.Text`
  text-align: center;
  font-size: 20;
  font-weight: bold;
  margin: 5px;
`;
const MonsterImage = styled.Image`
  width: 150;
  height: 150;
  margin: 5px;
`;
const MonsterImageView = styled.View`
  align-items: center;
  justify-content: center;
`;

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
              <Title>ずかんNo.</Title>
              <Val>{data.monster.id}</Val>
              <Title>なまえ</Title>
              <Val>{data.monster.name}</Val>
              <MonsterImageView>
                <MonsterImage
                  source={{uri: data.monster.img_src}}
                />
              </MonsterImageView>
            </View>
          );
        }}
      </Query>
    );
  }
}

export { MonsterDetail };
