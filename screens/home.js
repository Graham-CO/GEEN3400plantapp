import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Card from '../shared/card';

export default function Home({ navigation}){
    

    const pressHandler = () => { //Function that handles button press
        //navigation.navigate('Plants') //same thing as below
        navigation.push('Plants'); //pushes next screen onto stack
    }
    const pressHandlerBT = () => { //Function that handles button press
        //navigation.navigate('Plants') //same thing as below
        navigation.push('Bluetooth'); //pushes next screen onto stack
    }

    return(
        <View style={styles.container}>
            <Text style = {styles.titleText}> Home Screen </Text>
            <Card>
                <Button title='Go to plants' onPress={pressHandler} />
            </Card>
            <Card>
                <Button title = 'Set up Bluetooth' onPress={pressHandlerBT} />
            </Card>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    titleText: {
        fontSize: 50,
    }
});