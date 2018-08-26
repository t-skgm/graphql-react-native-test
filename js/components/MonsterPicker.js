import React, { Component } from 'react';
import { Text, View, Picker, TouchableOpacity } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from "styled-components";
import { LoadingView, ErrorView } from './FetchingViews';

const RandomButton = styled.TouchableOpacity`
  background-color: rgb(136, 213, 24);
  width: 80%;
  margin-top: 20;
  margin-bottom: 20;
  margin-left: 10%;
  margin-right: 10%;
  padding: 10px;
`;
const RandomButtonText = styled.Text`
  color: #fff;
`;

const MonsterPickerView = ({props, data}) => (
  <View {...props}>
    <Picker
      selectedValue={props.selected}
      onValueChange={(itemValue, itemIndex) => props.changeSelected(itemValue)}
    >
      {data.monsters.map(monster => (
        <Picker.Item
          label={`No.${monster.id} / ${monster.name}`}
          value={monster.id}
          key={'item' + monster.id}
        />
      ))}
    </Picker>
    <RandomButton onPress={() => props.onPressRandowShowButton(data.maxMonsterId)}
    >
      <RandomButtonText>ランダムでひょうじ</RandomButtonText>
    </RandomButton>
  </View>
);

const GET_MONSTERS = gql`
  {
    monsters {
      id
      name
      img_src
    }
    maxMonsterId
  }
`;

class MonsterPicker extends Component {
  render () {
    return (
      <Query query={GET_MONSTERS}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingView {...this.props}/>;
          if (error) return <ErrorView error={error} props={this.props}/>;
          return <MonsterPickerView props={this.props} data={data} />;
        }}
      </Query>
    );
  }
}

export { MonsterPicker };
