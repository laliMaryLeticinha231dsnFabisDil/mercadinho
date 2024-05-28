import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialFrutas = [
  { id: '1', nome: 'Maçã', imagem: 'https://via.placeholder.com/100', preco: 2.00, quantidade: 0 },
  { id: '2', nome: 'Banana', imagem: 'https://via.placeholder.com/100', preco: 1.00, quantidade: 0 },
  { id: '3', nome: 'Laranja', imagem: 'https://via.placeholder.com/100', preco: 1.50, quantidade: 0 },
  { id: '4', nome: 'Morango', imagem: 'https://via.placeholder.com/100', preco: 1.50, quantidade: 0 }, // Alterando o nome para 'Morango' como exemplo
];


const Frutas = ({ navigation }) => {
  const [frutas, setFrutas] = useState(initialFrutas);

  useEffect(() => {
    async function loadFrutas() {
      try {
        const storedFrutas = await AsyncStorage.getItem('frutas');
        if (storedFrutas) {
          setFrutas(JSON.parse(storedFrutas));
        }
      } catch (e) {
        console.error(e);
      }
    }
    loadFrutas();

    // Expondo a função resetQuantities ao componente de navegação
    navigation.setParams({ resetQuantities });
  }, [navigation]);

  const updateFrutas = async (id, delta) => {
    const updatedFrutas = frutas.map(f =>
      f.id === id ? { ...f, quantidade: Math.max(f.quantidade + delta, 0) } : f
    );
    setFrutas(updatedFrutas);
    await AsyncStorage.setItem('frutas', JSON.stringify(updatedFrutas));

    // Atualizar o carrinho também
    try {
      const storedCart = await AsyncStorage.getItem('carrinho');
      let cart = storedCart ? JSON.parse(storedCart) : [];

      const existingProductIndex = cart.findIndex(item => item.id === id);
      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantidade = Math.max(cart[existingProductIndex].quantidade + delta, 0);
      } else {
        const fruta = updatedFrutas.find(f => f.id === id);
        if (fruta.quantidade > 0) {
          cart.push(fruta);
        }
      }

      cart = cart.filter(item => item.quantidade > 0);

      await AsyncStorage.setItem('carrinho', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  };

  const addToCart = async (produto) => {
    try {
      const storedCart = await AsyncStorage.getItem('carrinho');
      let cart = storedCart ? JSON.parse(storedCart) : [];

      const existingProductIndex = cart.findIndex(item => item.id === produto.id);
      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantidade += 1;
      } else {
        cart.push({ ...produto, quantidade: 1 });
      }

      await AsyncStorage.setItem('carrinho', JSON.stringify(cart));
      alert('Produto adicionado ao carrinho!');
    } catch (e) {
      console.error(e);
    }
  };

  const resetQuantities = async () => {
    const resetFrutas = frutas.map(f => ({ ...f, quantidade: 0 }));
    setFrutas(resetFrutas);
    await AsyncStorage.setItem('frutas', JSON.stringify(resetFrutas));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Frutas</Text>
      <FlatList
        data={frutas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
  <View style={styles.productDetails}>
    <Image source={{ uri: item.imagem }} style={styles.image} />
    <View style={styles.descriptionContainer}>
      <Text style={styles.productName}>{item.nome}</Text>
      <Text style={styles.productPrice}>Preço: R$ {item.preco.toFixed(2)}</Text>
    </View>
  </View>
  <View style={styles.quantityContainer}>
    <TouchableOpacity onPress={() => updateFrutas(item.id, -1)}>
      <Text style={styles.button}>-</Text>
    </TouchableOpacity>
    <Text>{item.quantidade}</Text>
    <TouchableOpacity onPress={() => updateFrutas(item.id, 1)}>
      <Text style={styles.button}>+</Text>
    </TouchableOpacity>
  </View>
  <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
    <Text style={styles.buttonText}>Adicionar</Text>
  </TouchableOpacity>
</View>

        
        )}
      />
      <Button title="Ir para o Carrinho" onPress={() => navigation.navigate('Carrinho', { resetQuantities })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  product: {
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Para distribuir os botões horizontalmente
    marginTop: 10, // Adicionando um espaçamento entre o preço e os botões
  },
  
  button: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    backgroundColor: '#FFD166',
    textAlign: 'center',
    width: 100,
    height: 20,
    borderRadius: 10,
    marginLeft: 200,
    top: -100,
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    backgroundColor: '#B60952',
    borderRadius: 30,
    height: 60,
    width: 270,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  descriptionContainer: {
    marginLeft: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  
});

export default Frutas;
