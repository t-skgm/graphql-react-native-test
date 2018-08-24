import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import ApolloClientHOC from './components/ApolloClientHOC';
import UserData from './components/UserData';

class Root extends Component {
  render() {
    return(
      <SafeAreaView>
        <UserData />
      </SafeAreaView>
    );
  }
};

export default ApolloClientHOC(Root);
