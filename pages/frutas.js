import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Banana Prata', price: 10.99, image: require('../assets/banana.png') },
  { id: '2', name: 'Maçã', price: 6.99, image: require('../assets/maca.png') },
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

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };
  const zeroQuantity = (productId) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - item.quantity} : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };
 
return (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.header1}>FRUTAS</Text>
    </View>
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
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>
              {cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0}
            </Text>
            <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
          <Button title="Adicionar" onPress={() => addToCart(item)} color="#FFD166" />
        </View>
      )}
    />
    <TouchableOpacity
      onPress={() => navigation.navigate('Carrinho', { cart })}
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#B60952',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 66,
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
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
