import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Frutas = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const jsonValue = await AsyncStorage.getItem('@cart');
      setCart(jsonValue != null ? JSON.parse(jsonValue) : []);
    };
    fetchCart();
    
    // Simulando a obtenção dos produtos de algum lugar
    const fetchedProducts = [
      { id: '1', name: 'Maçã', price: 5, image: require('../assets/uva.png') },
      { id: '2', name: 'Banana', price: 5, image: require('../assets/banana.png') },
      { id: '3', name: 'Laranja', price: 1, image: require('../assets/laranja.png') },
    ];
    setProducts(fetchedProducts);
  }, []);

  const addToCart = async (product) => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cart');
      let cart = jsonValue != null ? JSON.parse(jsonValue) : [];
      const index = cart.findIndex((item) => item.id === product.id);

      if (index === -1) {
        cart.push({ ...product, quantity: 1 });
      } else {
        cart[index].quantity += 1;
      }

      await AsyncStorage.setItem('@cart', JSON.stringify(cart));
      setCart(cart);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
            <Button title="Adicionar ao Carrinho" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      {cart.length > 0 && (
        <Button
          title="Ver Carrinho"
          onPress={() => navigation.navigate('Carrinho', { cart })}
          style={styles.cartButton}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productContainer: {
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
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  cartButton: {
    marginTop: 10,
  },
});

export default Frutas;
