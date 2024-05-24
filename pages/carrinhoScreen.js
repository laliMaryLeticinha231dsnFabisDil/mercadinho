import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CarrinhoScreen = ({ route }) => {
  const { cart } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Atualize a lista de produtos com base nos itens do carrinho
    const fetchedProducts = cart.map(item => ({
      ...item,
      ...products.find(product => product.id === item.id)
    }));
    setProducts(fetchedProducts);
  }, [cart]);

  const handleQuantityChange = async (index, newQuantity) => {
    try {
      const updatedCart = [...cart];
      updatedCart[index].quantity = newQuantity;
      await AsyncStorage.setItem('@cart', JSON.stringify(updatedCart));
      // Atualize os produtos com base no carrinho atualizado
      const fetchedProducts = updatedCart.map(item => ({
        ...item,
        ...products.find(product => product.id === item.id)
      }));
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.productImage} />
            <Text>{item.name}</Text>
            <Text>Quantidade: {item.quantity}</Text>
            <Button title="Aumentar" onPress={() => handleQuantityChange(index, item.quantity + 1)} />
            <Button title="Diminuir" onPress={() => handleQuantityChange(index, Math.max(item.quantity - 1, 0))} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default CarrinhoScreen;
