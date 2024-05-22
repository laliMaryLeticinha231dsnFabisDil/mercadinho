import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ReceitaScreen = () => {
  const [ingrediente1, setIngrediente1] = useState('');
  const [ingrediente2, setIngrediente2] = useState('');
  const [ingrediente3, setIngrediente3] = useState('');

  const gerarReceita = () => {
    // Lógica para gerar receita baseada nos ingredientes
    console.log('Ingredientes:', ingrediente1, ingrediente2, ingrediente3);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/icone_receita.png')} style={styles.icon} />
        <Text style={styles.header}>RECEITA DO DIA</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.subheader}>Coloque os seus ingredientes e falaremos uma deliciosa comida</Text>
      <TextInput
        style={styles.input}
        placeholder="1º ingrediente:"
        value={ingrediente1}
        onChangeText={setIngrediente1}
      />
      <TextInput
        style={styles.input}
        placeholder="2º ingrediente:"
        value={ingrediente2}
        onChangeText={setIngrediente2}
      />
      <TextInput
        style={styles.input}
        placeholder="3º ingrediente:"
        value={ingrediente3}
        onChangeText={setIngrediente3}
      />
      <TouchableOpacity style={styles.button} onPress={gerarReceita}>
        <Text style={styles.buttonText}>GERAR RECEITA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E50000',
  },
  line: {
    width: '90%',
    height: 2,
    backgroundColor: '#E50000',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#E50000',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReceitaScreen;
