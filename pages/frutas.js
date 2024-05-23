import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Banana Prata', price: 10.99, image: require('../assets/banana.png') },
  { id: '2', name: 'Maçã', price: 6.99, image: require('../assets/maça.png') },
  { id: '3', name: 'Manga', price: 7.99, image: require('../assets/manga.png') },
  { id: '4', name: 'Laranja', price: 11.99, image: require('../assets/laranja.png') },
  { id: '5', name: 'Uva Verde', price: 11.99, image: require('../assets/uva.png') },
  { id: '6', name: 'Limão', price: 5.00, image: require('../assets/limao.png') },
  { id: '7', name: 'Melão', price: 10.99, image: require('../assets/melao.png') },
];

const Frutas = ({ navigation }) => {
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
      <Text style={styles.header1}>FRUTAS</Text>
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

export default Frutas;
