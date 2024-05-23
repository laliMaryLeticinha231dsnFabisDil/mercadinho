import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CompraIntermediariaScreen = () => {
  // Importa useState para criar estado local, useNavigation para navegação e TouchableOpacity para botões personalizados
  const navigation = useNavigation(); // Instância de useNavigation para navegar entre telas
  const [valor, setValor] = useState(''); // Estado local para armazenar o valor da compra
  const [inputVisible, setInputVisible] = useState(false); // Estado local para controlar a visibilidade do campo de entrada

  // Função para lidar com a resposta "Sim" do usuário
  const handleYes = () => {
    setInputVisible(true); // Define inputVisible como true para mostrar o campo de entrada
  };

  // Função para lidar com a resposta "Não" do usuário
  const handleNo = () => {
    navigation.navigate('Compra'); // Navega de volta para a tela de compra
  };

  // Função para lidar com o avanço após inserir o valor da compra
  const handleNext = () => {
    navigation.navigate('Compra', { valor }); // Navega para a tela de compra e passa o valor como parâmetro
  };

  // Retorna a estrutura da tela com base na visibilidade do campo de entrada
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
          <TouchableOpacity onPress={handleNext} style={styles.button}><Text style={styles.buttonText}>Avançar</Text></TouchableOpacity>
        </>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleYes} style={styles.button}><Text style={styles.buttonText}>Sim</Text></TouchableOpacity>
          <TouchableOpacity onPress={handleNo} style={styles.button}><Text style={styles.buttonText}>Não</Text></TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// Estilos para a tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz com que o container ocupe todo o espaço disponível na tela
    justifyContent: 'center', // Alinha os itens verticalmente no centro da tela
    alignItems: 'center', // Alinha os itens horizontalmente no centro da tela
    padding: 20, // Adiciona um espaçamento interno de 20 unidades em todos os lados
  },
  question: {
    fontSize: 38, // Define o tamanho da fonte para 38 unidades
    marginBottom: 10, // Adiciona um espaçamento inferior de 10 unidades
  },
  input: {
    borderWidth: 1, // Adiciona uma borda com largura de 1 unidade
    borderColor: '#ccc', // Define a cor da borda como cinza claro
    padding: 10, // Adiciona um espaçamento interno de 10 unidades
    width: '80%', // Define a largura do campo de entrada como 80% da largura total
    marginBottom: 20, // Adiciona um espaçamento inferior de 20 unidades
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row', // Define a direção dos itens como horizontal
    justifyContent: 'space-between', // Distribui o espaço entre os itens
  
    width: '100%', // Define a largura do contêiner como 100% da largura total
    marginTop: 40, // Adiciona um espaçamento superior de 40 unidades
  },
  button: {
    marginHorizontal: 37,
    width: 120, // Define a largura do botão como 140 unidades
    height: 60, // Define a altura do botão como 90 unidades
    backgroundColor: '#B60918', // Define a cor de fundo do botão como vermelho escuro
    borderRadius: 10, // Adiciona um raio de borda de 10 unidades para arredondar os cantos do botão
    justifyContent: 'center', // Alinha o conteúdo verticalmente no centro do botão
    alignItems: 'center', // Alinha o conteúdo horizontalmente no centro do botão
  },
  buttonText: {
    color: 'white', // Define a cor do texto como branca
    fontSize: 24, // Define o tamanho da fonte como 24 unidades
    fontWeight: 'bold', // Define o peso da fonte como negrito
  },
});

export default CompraIntermediariaScreen;
