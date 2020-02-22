import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.appbar}>
            <Text style={styles.appberText}>MEMO</Text>
          </View>
        </View>

        <View style={styles.memoList}>
            <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>講座のアイテム</Text>
              <Text style={styles.memoDate}>2020/02/23</Text>
            </View>

            <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>講座のアイテム</Text>
              <Text style={styles.memoDate}>2020/02/23</Text>
            </View>

            <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>講座のアイテム</Text>
              <Text style={styles.memoDate}>2020/02/23</Text>
            </View>

            <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>講座のアイテム</Text>
              <Text style={styles.memoDate}>2020/02/23</Text>
            </View>

            <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>講座のアイテム</Text>
              <Text style={styles.memoDate}>2020/02/23</Text>
            </View>
        </View>

        <View style={styles.memoAddButton}>
          <Text style={styles.memoAddButtonTitle}>+</Text>
        </View>
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
    paddingTop: 78,
  },
  memoAddButton:{
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    //fontSize: 24,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor:'#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    zIndex: 10,
  },
  memoAddButtonTitle:{
    justifyContent: 'center',
    fontSize: 24,
    color: '#fff',
  },
  memoList:{
    width: '100%',
    flex: 1,
  },
  memoListItem:{
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle:{
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate:{
    fontSize:12,
    color: '#a2a2a2',
  },
  appbar:{
    position: 'relative',
    //width: '100%',
    //flex:1,
    top: 0,
    //height: 78,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor:'#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10,
  },
  appberText:{
    color: '#fff',
    fontSize: 18
  }
});
