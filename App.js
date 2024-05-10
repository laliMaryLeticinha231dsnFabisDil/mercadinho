import React, { useState } from 'react';
import { View, Image, StyleSheet, Animated, Button } from 'react-native';

const App = () => {
  const [fadeAnim] = useState(new Animated.Value(0));

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./assets/dia-logo.png')}
        style={[styles.image, { opacity: fadeAnim }]}
      />
      <Button title="Fade In" onPress={fadeIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default App;
