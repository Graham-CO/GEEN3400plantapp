import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text>{navigation.getParam('plantName')}</Text>
            <Text>{navigation.getParam('color')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    titleText: {
        fontSize: 50,
    }
});