import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import ApolloClientHOC from './components/ApolloClientHOC';
import MonsterData2 from './components/MonsterData2';

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
    const props = {
      selected: this.state.selected,
      changeSelected: val => this.changeSelected(val)
    };
    return(
      <SafeAreaView>
        <View>
          <Text>Selected: {this.state.selected}</Text>
          <MonsterData2 {...props} />
        </View>
      </SafeAreaView>
    );
  }
};

export default ApolloClientHOC(Root);
