import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CompraIntermediariaScreen = () => {
  const navigation = useNavigation();
  const [valor, setValor] = useState('');
  const [inputVisible, setInputVisible] = useState(false);

  const handleYes = () => {
    setInputVisible(true);
  };

  const handleNo = () => {
    navigation.navigate('Compra');
  };

  const handleNext = () => {
    navigation.navigate('Compra', { valor });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Deseja colocar valor da compra?</Text>
      {inputVisible ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Digite o valor da compra"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
          />
          <Button title="Avançar" onPress={handleNext} />
        </>
      ) : (
        <>
          <Button title="Sim" onPress={handleYes} />
          <Button title="Não" onPress={handleNo} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
});

export default CompraIntermediariaScreen;
