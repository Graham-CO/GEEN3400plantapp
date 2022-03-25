import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRef } from 'react';

const Tab = createBottomTabNavigator();

export default function BT() {

    const tabOffsetValue = useRef(new Animated.Value(0)).current;

    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 10,
                    marginHorizontal: 20,
                    height: 60,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    }
                },
                
                headerStyle: {
                    backgroundColor: '#58d68d',
                }
            }}>
                {

                }
                <Tab.Screen name={"Home"} component={HomeScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: "absolute",
                            top: '50%'
                        }}>
                            <FontAwesome5
                                name="home"
                                size={20}
                                color={focused ? '#58d68d' : 'gray'}
                            ></FontAwesome5>

                        </View>
                    )
                }} listeners={({navigation, route}) => ({
                    tabPress: e =>{
                        Animated.spring(tabOffsetValue,{
                            toValue:0,
                            useNativeDriver: true
                        }).start();
                    }
                })} ></Tab.Screen>
                <Tab.Screen name={"Search"} component={Search} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: "absolute",
                            top: '50%'
                        }}>
                            <FontAwesome5
                                name="search"
                                size={20}
                                color={focused ? '#58d68d' : 'gray'}
                            ></FontAwesome5>

                        </View>
                    )
                }} listeners={({navigation, route}) => ({
                    tabPress: e =>{
                        Animated.spring(tabOffsetValue,{
                            toValue:getWdith(),
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>

                <Tab.Screen name={"Plants"} component={PlantScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: "absolute",
                            top: '50%',
                            
                        }}>
                            <FontAwesome5
                                name="tree"
                                size={30}
                                color={focused ? '#58d68d' : 'gray'}
                            ></FontAwesome5>

                        </View>
                    )
                }} listeners={({navigation, route}) => ({
                    tabPress: e =>{
                        Animated.spring(tabOffsetValue,{
                            toValue:getWdith() *2 + 10 ,
                            useNativeDriver: true
                        }).start();
                    }
                })}>
 
                </Tab.Screen>
                

                <Tab.Screen name={"Notifications"} component={NotificationScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: "absolute",
                            top: '50%'
                        }}>
                            <FontAwesome5
                                name="bell"
                                size={20}
                                color={focused ? '#58d68dd' : 'gray'}
                            ></FontAwesome5>

                        </View>
                    )
                }} listeners={({navigation, route}) => ({
                    tabPress: e =>{
                        Animated.spring(tabOffsetValue,{
                            toValue:getWdith() * 3 + 15,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>
                <Tab.Screen name={"Profile"} component={ProfileScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: "absolute",
                            top: '50%'
                        }}>
                            <FontAwesome5
                                name="user-alt"
                                size={20}
                                color={focused ? '#58d68d' : 'gray'}
                            ></FontAwesome5>

                        </View>
                    )
                }} listeners={({navigation, route}) => ({
                    tabPress: e =>{
                        Animated.spring(tabOffsetValue,{
                            toValue:getWdith() *4 + 20,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>
            </Tab.Navigator>
            <Animated.View style={{
                width: getWdith()-20,
                height: 2,
                backgroundColor: 'red',
                position: 'absolute',
                bottom: 99,
                left: 30,
                //borderRadius: '.50',
                transform: [
                    {translateX: tabOffsetValue}
                ]
            }}>

            </Animated.View>

        </NavigationContainer>
    );
}
function getWdith(){
    let width = Dimensions.get('window').width
    width = width-60
    return width/5
}

function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
  function PlantScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Plants!</Text>
      </View>
    );
  }
  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  function NotificationScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }
  function Search() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search!</Text>
      </View>
    );
  }
