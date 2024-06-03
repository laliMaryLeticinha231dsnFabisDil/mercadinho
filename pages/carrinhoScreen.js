import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Carrinho = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      setCartItems(cartData ? JSON.parse(cartData) : []);
    } catch (error) {
      console.error('Error loading cart data:', error);
      Alert.alert('Erro', 'Erro ao carregar o carrinho.');
    }
  };

  const saveCart = async (newCart) => {
    try {
      setCartItems(newCart);
      await AsyncStorage.setItem('cart', JSON.stringify(newCart));
    } catch (error) {
      console.error('Error saving cart data:', error);
      Alert.alert('Erro', 'Erro ao salvar o carrinho.');
    }
  };

  const incrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    saveCart(updatedCartItems);
  };

  const decrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    saveCart(updatedCartItems);
  };

  const clearCart = async () => {
    try {
      await AsyncStorage.removeItem('cart');
      setCartItems([]);
      Alert.alert('Sucesso', 'Carrinho limpo!');
    } catch (error) {
      console.error('Error clearing cart:', error);
      Alert.alert('Erro', 'Erro ao limpar o carrinho.');
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: R$ {calculateTotal()}</Text>
      </View>
      <Button title="Limpar Carrinho" onPress={clearCart} color="#FFD166" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Carrinho;
