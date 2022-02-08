import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <Text style = {styles.text}> Mr Pot Buttler</Text>
      <Image
       source={{uri: 'https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos1804/yupiramos180425584.jpg'}} style = {styles.img}
       />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    color: 'darkslateblue', 
    fontSize: 30
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50, 
  }
});

export default App;