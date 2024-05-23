import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const CompraScreen = ({ navigation }) => {
  const [isValueInputVisible, setIsValueInputVisible] = useState(false);
  const [purchaseValue, setPurchaseValue] = useState('');
  const [remainingValue, setRemainingValue] = useState(0);

  const handleYesPress = () => {
    setIsValueInputVisible(true);
  };

  const handleNoPress = () => {
    navigation.navigate('ItemSelection', { remainingValue: 0 });
  };

  const handleContinuePress = () => {
    setRemainingValue(parseFloat(purchaseValue));
    navigation.navigate('ItemSelection', { remainingValue: parseFloat(purchaseValue) });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DESEJA COLOCAR O VALOR DA COMPRA?</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity onPress={handleYesPress} style={styles.option}>
          <Text style={styles.optionText}>SIM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNoPress} style={styles.option}>
          <Text style={styles.optionText}>NÃO</Text>
        </TouchableOpacity>
      </View>
      {isValueInputVisible && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o valor"
            keyboardType="numeric"
            value={purchaseValue}
            onChangeText={setPurchaseValue}
          />
          <TouchableOpacity onPress={handleContinuePress} style={styles.continueButton}>
            <Text style={styles.continueButtonText}>CONTINUAR</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  option: {
    marginHorizontal: 20,
  },
  optionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B60918',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#B60918',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#B60918',
    padding: 10,
    borderRadius: 5,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CompraScreen;
