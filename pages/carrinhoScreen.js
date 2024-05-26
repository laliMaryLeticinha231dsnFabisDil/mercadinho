/*import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Carrinho = ({ route, navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cart = await AsyncStorage.getItem('carrinho');
        setCartItems(cart ? JSON.parse(cart) : []);
      } catch (error) {
        console.error(error);
      }
    };

    loadCart();
  }, []);

  const updateCart = async (updatedCartItems) => {
    try {
      setCartItems(updatedCartItems);
      await AsyncStorage.setItem('carrinho', JSON.stringify(updatedCartItems));
    } catch (error) {
      console.error(error);
    }
  };

  const incrementQuantity = async (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantidade: item.quantidade + 1 };
      }
      return item;
    });
    updateCart(updatedCartItems);
    await updateFrutasQuantity(productId, 1);
  };

  const decrementQuantity = async (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId && item.quantidade > 1) {
        return { ...item, quantidade: item.quantidade - 1 };
      }
      return item;
    });
    updateCart(updatedCartItems);
    await updateFrutasQuantity(productId, -1);
  };

  const clearCart = async () => {
    try {
      await AsyncStorage.removeItem('carrinho');
      setCartItems([]);
      alert('Carrinho limpo!');
      
      // Resetar as quantidades das frutas
      if (route.params && route.params.resetQuantities) {
        route.params.resetQuantities();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateFrutasQuantity = async (id, delta) => {
    try {
      const storedFrutas = await AsyncStorage.getItem('frutas');
      let frutas = storedFrutas ? JSON.parse(storedFrutas) : [];

      const updatedFrutas = frutas.map(f =>
        f.id === id ? { ...f, quantidade: Math.max(f.quantidade + delta, 0) } : f
      );

      await AsyncStorage.setItem('frutas', JSON.stringify(updatedFrutas));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.nome}</Text>
            <Text>R$ {item.preco.toFixed(2)}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.button}>
                <Text>-1</Text>
              </TouchableOpacity>
              <Text>{item.quantidade}</Text>
              <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.button}>
                <Text>+1</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Button title="Limpar Carrinho" onPress={clearCart} />
      <Button title="Voltar as Frutas" onPress={() => navigation.navigate('frutas')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});

export default Carrinho;
*/
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Carrinho = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cart = await AsyncStorage.getItem('carrinho');
        setCartItems(cart ? JSON.parse(cart) : []);
      } catch (error) {
        console.error(error);
      }
    };

    loadCart();
  }, []);

  const updateCart = async (updatedCartItems) => {
    try {
      setCartItems(updatedCartItems);
      await AsyncStorage.setItem('carrinho', JSON.stringify(updatedCartItems));
    } catch (error) {
      console.error(error);
    }
  };

  const incrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantidade: item.quantidade + 1 };
      }
      return item;
    });
    updateCart(updatedCartItems);
  };

  const decrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId && item.quantidade > 1) {
        return { ...item, quantidade: item.quantidade - 1 };
      }
      return item;
    });
    updateCart(updatedCartItems);
  };

  const clearCart = async () => {
    try {
      await AsyncStorage.removeItem('carrinho');
      setCartItems([]);
      alert('Carrinho limpo!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.nome}</Text>
            <Text>R$ {item.preco.toFixed(2)}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.button}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{item.quantidade}</Text>
              <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.button}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Button title="Limpar Carrinho" onPress={clearCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});

export default Carrinho;
