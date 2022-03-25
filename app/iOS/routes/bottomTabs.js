import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler'
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* FontAwesome5 is where we get the icons from as they are technically a 'font'
    We use the bottomtabs function for our new navigation -- TO BE IMPLEMENTED.
*/



export default function BottomTabs({navigation}) {
    const pressHandler = () => { //Function that handles button press
        //navigation.navigate('Plants') //same thing as below
        navigation.push('Plants'); //pushes next screen onto stack
    }

const Icon = (props) => (
    <TouchableOpacity> 
        <View>
        <FontAwesome5 name={props.icon} size={25} onPress={pressHandler} style={{
            marginBottom: 3,
            alignSelf: 'center',
        }}
        />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
);

    return (
        
        <View style = {styles.container}>
            <Icon icon ='home' text="Home" />
            <Icon icon='search' text="Search" />
            <Icon icon='tree' text="Plants" />
            <Icon icon='bluetooth' text="Connect" />
            <Icon icon='user' text="Profile" />
            
        </View>
    );
}

//Stylesheet for icons in the bottom tab 
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
    }
});

//Touchable opacity gives buttons the 'press' feel
