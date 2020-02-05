/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

// import { createStackNavigator, createAppContainer } from 'react-navigation';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LoginScreen from './src/LoginScreen';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoginScreen />
      </View>
    );
  }
}

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: LoginScreen,
//     navigationOptions: { header: null },
//   }
// })

// export default createAppContainer(AppNavigator);