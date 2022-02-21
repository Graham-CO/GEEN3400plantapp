import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import Navigator from './routes/homeStack';
import Home from './screens/home';
import Plants from './screens/plants';
import About from './screens/about'

const App = () => {
  return(
    <Navigator />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    color: 'darkgreen', 
    fontSize: 30
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50, 
  }
});

export default App;