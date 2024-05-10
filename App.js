import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const App = () => {
  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <Animatable.Image
  delay={100}
  animation="flipInY"
  source={require("./assets/dia-logo.png")}

/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 60,
    resizeMode: 'contain',
  },
});

export default App;
