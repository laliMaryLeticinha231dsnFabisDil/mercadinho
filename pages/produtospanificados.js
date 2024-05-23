import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image } from 'react-native';

const Stack = createStackNavigator();
const products = [
  { id: '1', name: 'Pão Puma', price: 8.99, image: require('../assets/pao.png') },
  { id: '2', name: 'Bisnaguinha Panco', price: 7.99, image: require('../assets/bisnaguinha.png') },
  { id: '3', name: 'Bolo Puma/sabor chocolate', price: 8.99, image: require('../assets/bolo-chocolate.png') },
  { id: '4', name: 'Bolo Puma/sabor laranja', price: 8.99, image: require('../assets/bolo-laranja.png') },
  { id: '5', name: 'Oreo', price: 3.50, image: require('../assets/oreo.png') },
  { id: '6', name: 'Trakinas', price: 3.00, image: require('../assets/trakinas.png') },
  { id: '7', name: 'Bono', price: 3.25, image: require('../assets/bono.png') },
  { id: '8', name: 'Club Social', price: 9.00, image: require('../assets/club-social.png') },
  { id: '9', name: 'Bolacha Doce', price: 6.25, image: require('../assets/bolacha-doce.png') },
  { id: '10', name: 'Sequilhos Banco', price: 11.50, image: require('../assets/sequilhos.png') },
  { id: '11', name: 'Cookies', price: 3.25, image: require('../assets/cookies.png') },
];
const panificados = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Grãos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text>R$ {item.price.toFixed(2)}</Text>
            </View>
            <Button title="Adicionar" onPress={() => addToCart(item)} color="#FFD166" />
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart', { cart })}
        style={styles.checkoutButton}
      >
        <Text style={styles.checkoutButtonText}>Ver Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#FFD166',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default panificados;