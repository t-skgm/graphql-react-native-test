import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import {
  ApolloClientHOC,
  MonsterPicker,
  MonsterDetail
} from './components';

class Root extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: 2
    };
  }

  changeSelected (val) {
    console.log('now selected: ', val)
    this.setState({selected: val});
  }

  render () {
    const passProps = {
      selected: this.state.selected,
      changeSelected: val => this.changeSelected(val)
    };

    return(
      <SafeAreaView style={{ flex: 1 }}>
        <MonsterDetail
          style={{ flex: 2 }}
          {...passProps}
        />
        <View style={{ flex: 1 }}>
          <Text>しらべたいモンスターをえらんでね</Text>
          <MonsterPicker {...passProps} />
        </View>
      </SafeAreaView>
    );
  }
};

export default ApolloClientHOC(Root);
