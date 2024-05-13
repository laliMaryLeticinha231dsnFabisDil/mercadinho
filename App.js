import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = () => {
  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <Animatable.Image
        delay={1000}
        animation="flipInY"
        source={require("./assets/dia-logo.png")}
        style={styles.image}
      />
      {/* Primeiro botão */}
      <TouchableOpacity 
        style={styles.button} // Estilo para o primeiro botão
        onPress={() => console.log("Botão 'Começar' pressionado")} // Ação quando o botão é pressionado
      >
        {/* Texto dentro do primeiro botão */}
        <Text style={styles.buttonText}>Faça seu login</Text>
      </TouchableOpacity>
      {/* Segundo botão */}
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#5C0D14' }]} // Estilo para o segundo botão, com uma cor diferente
        onPress={() => console.log("Botão 'Outro' pressionado")} // Ação quando o botão é pressionado
      >
        {/* Texto dentro do segundo botão */}
        <Text style={styles.buttonText}>já tenho uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 500, // Definindo a largura desejada
    height: 100, // Definindo a altura desejada
    resizeMode: 'contain',
  },
  button: {
    top: 100,
    backgroundColor: '#5C0D14', // Cor de fundo padrão para os botões
    marginTop: 20, // Espaçamento entre a imagem e os botões
    paddingVertical: 15, // Espaçamento vertical dentro dos botões
    paddingHorizontal: 30, // Espaçamento horizontal dentro dos botões
    borderRadius: 10, // Borda arredondada
  },
  buttonText: {
    color: 'white', // Cor do texto
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },
});

export default App;
