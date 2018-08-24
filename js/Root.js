import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styled from "styled-components";
import {
  ApolloClientHOC,
  MonsterPicker,
  MonsterDetail
} from './components';

const PicekerView = styled.View`
`;
const PicekerText = styled.Text`
  text-align: center;
`;

class Root extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: 1
    };
  }

  changeSelected = val => {
    console.log('now selected: ', val)
    this.setState({selected: val});
  };

  onPressRandowShowButton = max => {
    const randomId = Math.floor(Math.random() * (max + 1));
    this.changeSelected(randomId);
  };

  render () {
    const passProps = {
      selected: this.state.selected,
      changeSelected: this.changeSelected,
      onPressRandowShowButton: this.onPressRandowShowButton
    };

    return(
      <SafeAreaView style={{ flex: 1 }}>
        <MonsterDetail
          style={{ flex: 1 }}
          {...passProps}
        />
        <PicekerView>
          <PicekerText>しらべたいモンスターをえらんでね</PicekerText>
          <MonsterPicker {...passProps} />
        </PicekerView>
      </SafeAreaView>
    );
  }
};

export default ApolloClientHOC(Root);
