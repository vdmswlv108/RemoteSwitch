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
