import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import CircleButton from '../elements/CircleButton';
class MemoEditScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <TextInput styel={styles.memoEditInput} multiline value="hi" />
                <CircleButton name="check"/>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    memoEditInput:{
        flex: 1,
        width: '100%',
        backgroundColor: '#ddd',
        color: '#fff',
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 16,
    },
});

export default MemoEditScreen;