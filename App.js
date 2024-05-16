import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer> {/* Certifique-se de envolver seu aplicativo com o NavigationContainer */}
      <MyApp />
    </NavigationContainer>
  );
};

const MyApp = () => {
  const navigation = useNavigation();
  const animationRef = useRef(null);

  const onAnimationEnd = () => {
    // Navegar para a próxima tela após a animação
    navigation.navigate('IndexPage');
  };

  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <Animatable.Image
        ref={animationRef}
        delay={100}
        animation="flipInY"
        source={require("./assets/dia-logo.png")}
        style={styles.image}
        onAnimationEnd={onAnimationEnd} // Chama a função após a animação terminar
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 120,
  },
});

export default App;
