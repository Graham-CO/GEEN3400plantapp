import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text>{navigation.getParam('plantName')}</Text>
            <Text>{navigation.getParam('color')}</Text>
            <View style={styles.pict}>
           <Image source={require('../images/shelf1.png')}></Image>
           </View>
           <View style={styles.pict2}>
           <Image source={require('../images/shelf1.png')}></Image>
           </View>
           <View style={styles.pict3}>
           <View style={styles.pict4}>
           <Image source={require('../images/plant1.jpeg')}></Image>
           </View>
           <Image source={require('../images/shelf1.png')}></Image>
           </View>
           <View style={styles.picthanging1}>
           <Image source={require('../images/hanging1.jpeg')}></Image>
           </View>
           <View style={styles.picthanging2}>
           <Image source={require('../images/hanging1.jpeg')}></Image>
           </View>
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
    picthanging1: {
        flex: 100,
        position: 'absolute',
        top: -100,
        right: 100,
        transform: [{ scale:0.50}]
    },
    picthanging2: {
        flex: 100,
        position: 'absolute',
        top: -100,
        right: -100,
        transform: [{ scale:0.50}]
    },
    pict: {
        flex: 100,
        position: 'absolute',
        top: 100,
        alignItems: 'center',
        transform: [{ scale:0.12}]
    },
    pict2: {
        flex: 100,
        // position: 'absolute',
        top: 200,
        alignItems: 'center',
        transform: [{ scale:0.12}]
    },
    pict3: {
        flex: 100,
        // position: 'absolute',
        top: 50,
        alignItems: 'center',
        transform: [{ scale:0.12}]
    },
    pict4: {
        flex: 100,
        // position: 'absolute',
        top: -1300,
        right: 800,
        transform: [{ scale:5.00}]

    },
    titleText: {
        fontSize: 50,
    }
});