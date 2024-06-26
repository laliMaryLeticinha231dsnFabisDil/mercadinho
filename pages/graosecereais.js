/*import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Arroz', price: 34.00, image: require('../assets/arroz.png') },
  { id: '2', name: 'Feijão', price: 7.99, image: require('../assets/feijao.png') },
  { id: '3', name: 'Açúcar', price: 5.99, image: require('../assets/acucar.png') },
  { id: '4', name: 'Milho para Pipoca', price: 8.90, image: require('../assets/pipoca.png') },
  { id: '5', name: 'Farinha de Trigo', price: 4.90, image: require('../assets/trigo.png') },
  { id: '6', name: 'Farinha de Aveia', price: 9.99, image: require('../assets/aveia.png') },
  { id: '7', name: 'Granola', price: 15.00, image: require('../assets/granola.png') },
  { id: '8', name: 'Espaguete N°8', price: 4.99, image: require('../assets/espaguete.png') },
  { id: '9', name: 'Macarrão Pena', price: 4.99, image: require('../assets/pena.png') },
  { id: '10', name: 'Macarrão Parafuso', price: 4.99, image: require('../assets/parafuso.png') },
  { id: '11', name: 'Massa de Bolo sabor chocolate', price: 7.99, image: require('../assets/massachocolate.png') },
  { id: '12', name: 'Massa de Bolo sabor baunilha', price: 7.99, image: require('../assets/massabaunilha.png') },
  { id: '13', name: 'Massa de Bolo sabor laranja', price: 7.99, image: require('../assets/massalaranja.png') },
  { id: '14', name: 'Cereal nestle', price: 9.99, image: require('../assets/nescau.png') },
  { id: '15', name: 'Sucrilhos', price: 9.99, image: require('../assets/sucrilhos.png') },
];

const graos = ({ navigation }) => {
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

export default graos;
*/






import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const products = [
  { id: '1', name: 'Arroz', price: 34.00, image: require('../assets/arroz.png') },
  { id: '2', name: 'Feijão', price: 7.99, image: require('../assets/feijao.png') },
  { id: '3', name: 'Açúcar', price: 5.99, image: require('../assets/acucar.png') },
  { id: '4', name: 'Milho para Pipoca', price: 8.90, image: require('../assets/pipoca.png') },
  { id: '5', name: 'Farinha de Trigo', price: 4.90, image: require('../assets/trigo.png') },
  { id: '6', name: 'Farinha de Aveia', price: 9.99, image: require('../assets/aveia.png') },
  { id: '7', name: 'Granola', price: 15.00, image: require('../assets/granola.png') },
  { id: '8', name: 'Espaguete N°8', price: 4.99, image: require('../assets/espaguete.png') },
  { id: '9', name: 'Macarrão Pena', price: 4.99, image: require('../assets/pena.png') },
  { id: '10', name: 'Macarrão Parafuso', price: 4.99, image: require('../assets/parafuso.png') },
  { id: '11', name: 'Massa de Bolo sabor chocolate', price: 7.99, image: require('../assets/massachocolate.png') },
  { id: '12', name: 'Massa de Bolo sabor baunilha', price: 7.99, image: require('../assets/massabaunilha.png') },
  { id: '13', name: 'Massa de Bolo sabor laranja', price: 7.99, image: require('../assets/massalaranja.png') },
  { id: '14', name: 'Cereal nestle', price: 9.99, image: require('../assets/nescau.png') },
  { id: '15', name: 'Sucrilhos', price: 9.99, image: require('../assets/sucrilhos.png') },
];

const GraosECereais = ({ navigation }) => {
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
      saveCart(updatedCart);
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
      <Text style={styles.header1}>Grãos E CEREAIS</Text>
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
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    backgroundColor: '#B60952',
    borderRadius: 30,
    height: 60,
    width: 290,
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

export default GraosECereais;
