import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CarrinhoScreen = ({ navigation }) => {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    async function loadCarrinho() {
      const storedCarrinho = await AsyncStorage.getItem('carrinho');
      if (storedCarrinho) {
        setCarrinho(JSON.parse(storedCarrinho));
      } else {
        // Se não houver carrinho armazenado, use um carrinho vazio
        setCarrinho([]);
      }
    }
    loadCarrinho();
  }, []);

  const atualizarQuantidade = async (produtoId, quantidade) => {
    const updatedCarrinho = carrinho.map(item =>
      item.id === produtoId ? { ...item, quantidade: quantidade } : item
    );
    await AsyncStorage.setItem('carrinho', JSON.stringify(updatedCarrinho));
    setCarrinho(updatedCarrinho);
  };

  const aumentarQuantidade = async (produtoId) => {
    atualizarQuantidade(produtoId, carrinho.find(item => item.id === produtoId).quantidade + 1);
  };

  const diminuirQuantidade = async (produtoId) => {
    atualizarQuantidade(produtoId, Math.max(0, carrinho.find(item => item.id === produtoId).quantidade - 1));
  };

  const removerDoCarrinho = async (produtoId) => {
    atualizarQuantidade(produtoId, 0);
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0).toFixed(2);
  };

  return (
    <View>
      <FlatList
        data={carrinho.filter(item => item.quantidade > 0)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome} - R${item.preco.toFixed(2)}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Button title="Aumentar" onPress={() => aumentarQuantidade(item.id)} />
            <Button title="Diminuir" onPress={() => diminuirQuantidade(item.id)} />
            <Button title="Remover" onPress={() => removerDoCarrinho(item.id)} />
          </View>
        )}
      />
      <Text>Total: R${calcularTotal()}</Text>
    </View>
  );
};

export default CarrinhoScreen;
