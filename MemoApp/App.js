import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoLoginScreen from './src/screens/MemoLoginScreen';
import MemoSignUpScreen from './src/screens/MemoSignUpScreen';


const App = createStackNavigator({
  Home: {
    screen: MemoListScreen,
  },
}, {
  navigationOptions: {
    headerTitle: 'Memot'
    , headerStyle:
      { backgroundColor: '#265366' }
    , headerTitleStyle:
      { color: '#fff' }
  },
});

export default createAppContainer(App);
