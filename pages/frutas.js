import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Frutas = ({ navigation }) => {
  const [frutas, setFrutas] = useState([]);

  useEffect(() => {
    async function loadFrutas() {
      const storedFrutas = await AsyncStorage.getItem('frutas');
      if (storedFrutas) {
        setFrutas(JSON.parse(storedFrutas));
      } else {
        // Se não houver frutas armazenadas, use o estado inicial
        setFrutas([
          { id: '1', nome: 'Maçã', quantidade: 0, preco: 2.00 },
          { id: '2', nome: 'Banana', quantidade: 0, preco: 1.00 },
          { id: '3', nome: 'Laranja', quantidade: 0, preco: 1.50 },
        ]);
      }
    }
    loadFrutas();
  }, []);

  const aumentarQuantidade = async (produtoId) => {
    const updatedFrutas = frutas.map(item =>
      item.id === produtoId ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    await AsyncStorage.setItem('frutas', JSON.stringify(updatedFrutas));
    setFrutas(updatedFrutas);
  };

  const diminuirQuantidade = async (produtoId) => {
    const updatedFrutas = frutas.map(item =>
      item.id === produtoId ? { ...item, quantidade: Math.max(0, item.quantidade - 1) } : item
    );
    await AsyncStorage.setItem('frutas', JSON.stringify(updatedFrutas));
    setFrutas(updatedFrutas);
  };

  return (
    <View>
      <FlatList
        data={frutas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome} - R${item.preco.toFixed(2)}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Button title="Adicionar ao Carrinho" onPress={() => aumentarQuantidade(item.id)} />
            <Button title="+" onPress={() => aumentarQuantidade(item.id)} />
            <Button title="-" onPress={() => diminuirQuantidade(item.id)} />
          </View>
        )}
      />
      <Button title="Ver Carrinho" onPress={() => navigation.navigate('Carrinho')} />
    </View>
  );
};

export default Frutas;
