import React, {useState} from 'react';
import { FlatList, View, Text, Image, StyleSheet, Animated, Dimensions, SafeAreaView, Card, Button, TouchableOpacity, TextInput, onChangeText, ImageBackground} from 'react-native';
import Navigator from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createAppContainer, StackRouter } from "react-navigation";
import About from './screens/about'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input } from 'react-native-elements/dist/input/Input';


const Tab = createBottomTabNavigator();

/* 
This new method works by having each screen as a 'function' (you'll see 
at the bottom), where when we click each icon at the bottom it will 'call'
that funtion which will then display the corresponding screen.
*/

const App = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return(
    <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    backgroundColor: '#f2f2f2',
                    position: 'absolute',
                    bottom: 30,
                    marginHorizontal: 20,
                    height: 60,
                    borderRadius: 10,
                    borderColor: 'gray',
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    }
                },
                
                headerStyle: {
                    backgroundColor: '#58d68d',
                }
            }}>
                <Tab.Screen name={"Login"} component={LoginScreen}
                
                options={{
                  headerShown: true,
                  headerStatusBarHeight: 47,
                  headerTitleAlign: 'center',
                  headerTitleStyle:{
                    color: 'white',
                    fontFamily: 'HelveticaNeue',
                    fontWeight: '300',
                    fontSize: 20
                  
                  },
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: "absolute",
                            top: '50%'
                        }}>
                            <FontAwesome5
                                name="address-card"
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
                <Tab.Screen name={"Search"} component={Search} 
                options={{
                  headerTitleStyle:{
                    color: 'white',
                    fontFamily: 'HelveticaNeue',
                    fontWeight: '300'
                  },
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

                <Tab.Screen name='Your Plants' component={PlantStack} 
                options={{
                  headerShown: false,
                  headerTitleStyle:{
                    color: 'white',
                    fontFamily: 'HelveticaNeue',
                    fontWeight: '300'
                  },
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
                

                <Tab.Screen name={"Notifications"} component={NotificationScreen} 
                options={{
                  headerTitleStyle:{
                    color: 'white',
                    fontFamily: 'HelveticaNeue',
                    fontWeight: '300'
                  },
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: "absolute",
                            top: '50%'
                        }}>
                            <FontAwesome5
                                name="bell"
                                size={20}
                                color={focused ? '#58d68d' : 'gray'}
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
                <Tab.Screen name={"Profile"} component={ProfileScreen} 
                options={{
                  headerTitleStyle:{
                    color: 'white',
                    fontFamily: 'HelveticaNeue',
                    fontWeight: '300'
                  },
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
            {/* below is the animated little green slider*/}
            <Animated.View style={{
                width: getWdith()-20,
                height: 2,
                backgroundColor: '#58d68d',
                position: 'absolute',
                bottom: 85,
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
//function for getting total width of bottom tab window, dividing it into little slice
function getWdith(){
  let width = Dimensions.get('window').width
  width = width-60
  return width/5
}

//Profile Screen
function ProfileScreen() {
  return (
    <SafeAreaView style={styles.profContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style = {styles.titleBar}>
          <FontAwesome5 name="ellipsis-v" size={24} color='#52575d'></FontAwesome5>
          <FontAwesome5 name="edit" size={24} color='#52575d'></FontAwesome5>
        </View>

        <View style={{alignSelf: 'center'}}>
          <View style = {styles.profileImage}>
            <Image source={require('./images/MauiProfilePic.png')} style = {styles.profileImage} resizeMode='center'></Image>
          </View>
        </View>

        <View style = {styles.infoContainer}>
          <Text style = {[styles.profileText, {fontWeight: '200', fontSize: 36}]}>Maui</Text>
          <Text style = {[styles.profileText, {color: '#AEB5BC', fontSize: 14}]}>Plant-Enthusiast</Text>
        </View>

        <View style = {styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style = {styles.profileText, {fontWeight: '200',fontSize: 24}}>293</Text>
            <Text style = {styles.profileText, styles.subText}>Friends</Text>
          </View>
          <View style={[styles.statsBox, {borderColor: '#DFD8CD', borderLeftWidth: 1, borderRightWidth: 1}]}>
            <Text style = {styles.profileText, {fontWeight: '200',fontSize: 24}}>400</Text>
            <Text style = {styles.profileText, styles.subText}>Plants</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style = {styles.profileText, {fontWeight: '200',fontSize: 24}}>12</Text>
            <Text style = {styles.profileText, styles.subText}>Mr. Pots</Text>
          </View>
        </View>

        <View style = {{marginTop: 32}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style = {styles.mediaImageContainer}>
              <Image source={require('./images/PlantPic1.jpg')} style={styles.Pictures} resizeMode='cover'></Image>
            </View>
            <View style = {styles.mediaImageContainer}>
              <Image source={require('./images/PlantPic2.jpg')} style={styles.Pictures} resizeMode='cover'></Image>
            </View>
            <View style = {styles.mediaImageContainer}>
              <Image source={require('./images/PlantPic3.jpg')} style={styles.Pictures} resizeMode='cover'></Image>
            </View>
            <View style = {styles.mediaImageContainer}>
              <Image source={require('./images/PlantPic4.jpg')} style={styles.Pictures} resizeMode='cover'></Image>
            </View>
          </ScrollView>
        </View>

        <Text style = {[styles.subText, styles.recent]}>Recent Activity</Text>

        <View style= {{alignItems: 'center'}}>
          <View style = {styles.recentItem}>
            <View styles = {styles.recentItemIndicator}></View>
            <View styles = {{width: 250}}>
              <Text styles={styles.profileText}>
                Started following <Text style = {{fontWeight: '400' }}> Dwyane 'the Rock' Johson</Text> 
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

//Plant Screen
/* 
- add pots on top of shelves
- change shelf colors
- make pots clickable, take to new screen
- overall just make look good

- Soil Moisture Sensor
- Temperature Sensor
- Sunlight Sensor
*/
function PlantScreen({navigation}) {
  const pressHandler = () => {
    navigation.push('About')
  }
  const [plantName, plantInformation] = useState([
    { plantName: 'Snake Plant', color: 'Green', key: '1'},
    { plantName: 'Fern', color: 'Dark Green', key: '2'},
    { plantName: 'Algae', color: 'Orange', key: '3'}

  ]);
  return(
      <SafeAreaView style={styles.container}>
          <View style= {styles.statsContainer}>
            <View style = {styles.potPic}>
                <TouchableOpacity onPress={() => navigation.navigate('AboutPlants')}>
                  <Image source={require('./images/monstera.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style = {styles.potPic}>
              <TouchableOpacity onPress={() => navigation.navigate('AboutPlants')}>
                <Image source={require('./images/monstera.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style = {styles.shelfPic}>
            <Image source={require('./images/shelf1.png')}></Image>
          </View>
          <View style= {styles.statsContainer}>
            <View style = {styles.potPic}>
              <TouchableOpacity onPress={() => navigation.navigate('AboutPlants')}>
                <Image source={require('./images/monstera.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style = {styles.potPic}>
              <TouchableOpacity onPress={() => navigation.navigate('AboutPlants')}>
                <Image source={require('./images/monstera.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style = {styles.shelfPic}>
            <Image source={require('./images/shelf1.png')}></Image>
          </View>
          <View style = {styles.shelfPic}>
            <Image source={require('./images/shelf1.png')}></Image>
          </View>
      </SafeAreaView> 
  );
}



//-------------------------------------------------------------------
//Plant Stack is used to navigate to the respective plant about screen - in the works
const Stack = createNativeStackNavigator();
const PlantStack = () => {
  return(
    <Stack.Navigator >
      <Stack.Screen name='PlantScreen' component={PlantScreen} options={{
        title: 'Your Plants', //title of page
        headerStyle:{
          backgroundColor: '#58d68d' //background color of header
        },
        headerTitleStyle: { //Text options
            color: 'white',
            fontFamily: 'HelveticaNeue',
            fontWeight: '300',
            fontSize: 20
        },
      }}/>
      <Stack.Screen name='AboutPlants' component={AboutPlants} options={{
        title: 'About your Monsterra',
        backgroundColor: 'black',
        headerStyle:{
          backgroundColor: '#58d68d'
        },
        headerTitleStyle: {
          color: 'white',
          fontFamily: 'HelveticaNeue',
          fontWeight: '300',
          fontSize: 20
      },
        headerTintColor: 'white' //for back button color
        }}/>
    </Stack.Navigator>
  );
}
//-------------------------------------------------------------------



function AboutPlants(){
  return(
    <Text style = {styles.text}>About plants</Text>

  );
}

//Login Screen
function LoginScreen() {
  const image = "../images/background1.jpeg";
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source = {image}>

    </ImageBackground>
    <View style={styles.text1}>
    <Text>Login</Text>
    </View>




     <View style={styles.email}>
     <Input placeholder="Email" onChangeText={(text)=> console.log(text)} />

     </View>
     <View style={styles.password}>
     <Input placeholder="Password" onChangeText={(text)=> console.log(text)} />
     </View>
      <View style = {styles.redpanda}>
        <Image source={require('./images/redpanda1.png')}></Image>
      </View>
      </SafeAreaView>
  );



}

//Notification Screen (may be changed)
function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.subText}>Notifications???? idk what this will be</Text>
      <Text style={styles.subText}>My thoughts are that you will need a place to 
      check where current or previous notificaitons have gone - or if app notifcations 
      are silent than you can look at them here</Text>
    </View>
  );
}

//Search Screen (may be changed)
function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subText}>Ideas for 'search' page</Text>
      <Text style={styles.subText}>- Add database of tons of different plants</Text>
      <Text style={styles.subText}>- Make database acessible through an autofill search?</Text>
    </SafeAreaView>
  );
}


//Style sheet for all our different styles used across the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'white'
  },
  profContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  text: {
    color: 'darkgreen', 
    fontSize: 30
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50, 
  },
  titleText: {
    fontSize: 50,
  },
  plantText: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold'
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden'
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  profileText: {
    fontFamily: 'HelveticaNeue',
    color: '#52575d'
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center', 
    marginTop: 32,
  },
  statsBox: {
    flex: 1,
    alignItems: 'center',
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500'
  },
  mediaImageContainer: {
    width: 175,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  Pictures: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  recentItemIndicator: {
    backgroundColor: 'red',
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
  },
  shelfPic: {
        flex: 1,
        width:1000,
        height: 1000,
        alignItems: 'center',
        transform: [{ scale:0.12}],
        justifyContent: 'space-evenly',
        
  },
  potPic: {
    flexDirection: 'row',
    height: 50,
    width: 50,
    transform: [{ scale:0.3}],
    justifyContent: 'space-evenly',
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 75

  },
  text1:{
    top: 200,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: 'center'
  },
    loginbutton:{
      top: 350,
      right: 50,
      // alignSelf: 'center', 
      flex: 1,
      resizeMode: 'contain'
  
    },
    email:{
      top: 200,
      // right: 200,
      alignSelf: 'center', 
      width: 250,
      // flex: 1,
      // resizeMode: 'contain'
  
    },
    password: {
      top: 200,
      // right: -50,
      alignSelf: 'center',
      width: 250,
  
      // flex: 1,
      // resizeMode: 'contain'
    },
    redpanda:{
      top: 200,
      right: 50,
      // alignSelf: 'center', 
      flex: 1,
      resizeMode: 'contain'
  
    },
});

export default App;