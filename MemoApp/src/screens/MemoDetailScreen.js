import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';
class MemoDetailScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.memoHeader}>
                        <View>
                        <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
                        <Text style={styles.memoHeaderDate}>2020/02/22</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.memoContent}>
                    <Text>
                        講座のアイデアです。
                    </Text>
                </View>

                <CircleButton color="white" style={styles.editButton}>＋</CircleButton>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoHeader: {
        height:180,
        backgroundColor: '#17313C',
        justifyContent: 'center',
        padding: 10,
        paddingTop: 10,
    },
    memoHeaderTitle: {
        paddingTop: 50,
        fontSize:20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 3,
    },
    memoHeaderDate: {
        fontSize:12,
        color: '#fff',
    },
    memoContent: {
        paddingTop: 10,
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 30,
        backgroundColor: '#fff',
        flex: 1,
    },
    editButton:{
        top: 150,
    }
});

export default MemoDetailScreen;
