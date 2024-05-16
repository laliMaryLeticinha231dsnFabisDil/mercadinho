import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CalculadoraScreen = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const somar = () => {
    const resultadoSoma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(resultadoSoma.toString());
  };

  const limpar = () => {
    setNumero1('');
    setNumero2('');
    setResultado('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        keyboardType="numeric"
        placeholder="Digite o primeiro número"
        value={numero1}
        onChangeText={text => setNumero1(text)}
      />
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        keyboardType="numeric"
        placeholder="Digite o segundo número"
        value={numero2}
        onChangeText={text => setNumero2(text)}
      />
      <Button title="Somar" onPress={somar} />
      <Text style={{ marginTop: 10 }}>{resultado}</Text>
      <Button title="Limpar" onPress={limpar} />
    </View>
  );
}

export default CalculadoraScreen;
