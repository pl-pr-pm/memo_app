import React from 'react';
import {StyleSheet, View, TouchableHighlight, TextInput, Text} from 'react-native';
import CircleButton from '../elements/CircleButton';
class MemoLoginScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    ログイン
                </Text>
                <TextInput style={styles.input} value="Email Address" />
                <TextInput style={styles.input} value="Password" />
                <TouchableHighlight style={styles.button} onPress={() => {}} >
                    <Text　style={styles.buttonTitle}>ログインする</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
       flex:1,
       width: '100%',
       backgroundColor: '#fff',
       padding: 24,
    },
    title:{
        fontSize: 24,
        alignSelf: 'center',
        paddingTop: 70,
        paddingBottom: 20,

    },
    input:{
        backgroundColor:'#ddd',
        height:40,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#DDD',
        padding: 8,
    },
    button:{
        backgroundColor:'#E31676',
        height:40,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        alignSelf: 'center',
    },
    buttonTitle:{
        color:'#fff',
        fontSize: 18,
        borderRadius: 10,
        padding: 8,
    }
});

export default MemoLoginScreen;