import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.Component {
    render(){
        return(
            <View style={styles.appbar}>
            <Text style={styles.appberText}>MEMO</Text>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    appbar:{
        position: 'absolute',
        flex:1,
        top: 0,
        height: 78,
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
      },
    });
export default Appbar;