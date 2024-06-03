import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const products = [
  { id: '1', name: 'Pão Puma', price: 8.99, image: require('../assets/pao.png') },
  { id: '2', name: 'Bisnaguinha Panco', price: 7.99, image: require('../assets/bisnaguinha.png') },
  { id: '3', name: 'Bolo Puma/sabor chocolate', price: 8.99, image: require('../assets/bolochocolate.png') },
  { id: '4', name: 'Bolo Puma/sabor laranja', price: 8.99, image: require('../assets/bololaranja.png') },
  { id: '5', name: 'Oreo', price: 3.50, image: require('../assets/oreo.png') },
  { id: '6', name: 'Trakinas', price: 3.00, image: require('../assets/trakinas.png') },
  { id: '7', name: 'Bono', price: 3.25, image: require('../assets/bono.png') },
  { id: '8', name: 'Club Social', price: 9.00, image: require('../assets/clubsocial.png') },
  { id: '9', name: 'Bolacha Doce', price: 6.25, image: require('../assets/bolachadoce.png') },
  { id: '10', name: 'Sequilhos Banco', price: 11.50, image: require('../assets/sequilhos.png') },
  { id: '11', name: 'Cookies', price: 3.25, image: require('../assets/cookies.png') },
];

const ProdutosPanificacao = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState(products.reduce((acc, product) => {
    acc[product.id] = 0;
    return acc;
  }, {}));

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    } catch (error) {
      console.log('Error loading cart data:', error);
    }
  };

  const saveCart = async (newCart) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(newCart));
    } catch (error) {
      console.log('Error saving cart data:', error);
    }
  };

  const addToCart = (product) => {
    if (quantities[product.id] > 0) {
      const updatedCart = cart.some(item => item.id === product.id) ?
        cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantities[product.id] } : item) :
        [...cart, { ...product, quantity: quantities[product.id] }];
  
      setCart(updatedCart);
      saveCart(updatedCart); // Salva o carrinho no AsyncStorage
      navigation.navigate('Carrinho');
    } else {
      alert('Adicione uma quantidade maior que zero.');
    }
  };
  const incrementQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] > 0 ? prevQuantities[productId] - 1 : 0
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header2}>PRODUTOS PANIFICADOS</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text>R$ {item.price.toFixed(2)}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.quantityButton}>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text>{quantities[item.id]}</Text>
                <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.quantityButton}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Button title={`Adicionar ${quantities[item.id] > 0 ? `+${quantities[item.id]}` : ''}`} onPress={() => addToCart(item)} color="#FFD166" />
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Carrinho')}
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
  header2: {
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 5,
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

      
      export default ProdutosPanificacao;
