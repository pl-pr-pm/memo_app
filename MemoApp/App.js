import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoLoginScreen from './src/screens/MemoLoginScreen';
import MemoSignUpScreen from './src/screens/MemoSignUpScreen';
import Appbar from './src/components/Appbar';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Appbar />
       <MemoSignUpScreen/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});
