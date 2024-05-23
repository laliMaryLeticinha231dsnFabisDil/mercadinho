import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image } from 'react-native';

const Stack = createStackNavigator();
const products = [
  { id: '1', name: 'Leite', price: 3.99, image: require('./assets/leite.png') },
  { id: '2', name: 'Leite Desnatado', price: 5.00, image: require('./assets/desnatado.png') },
  { id: '3', name: 'Margarina', price: 10.99, image: require('./assets/margarina.png') },
  { id: '4', name: 'Requeijão', price: 8.90, image: require('./assets/requeijao.png') },
  { id: '5', name: 'Iorgurte Integral', price: 12.95, image: require('./assets/integral.png') },
  { id: '6', name: 'Iorgute Natural', price: 3.75, image: require('./assets/natural.png') },
  { id: '7', name: 'Danone Grego', price: 15.00, image: require('./assets/danone.png') },
  { id: '8', name: 'Doce de Leite', price: 7.99, image: require('./assets/docedeleite.png') },
  { id: '9', name: 'Leite Condensado', price: 5.75, image: require('./assets/leitecondensado.png') },
  { id: '10', name: 'Creme de Leite', price: 4.99, image: require('./assets/cremedeleite.png') },
  { id: '11', name: 'Mussarela', price: 14.99, image: require('./assets/mussarela.png') },
  
  

  
  

];



const HomeScreen = ({ navigation }) => {
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
      const itemInCart = prevCart.find((item) => item.id === productId);
      if (itemInCart.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header1}>PRODUTOS LÁCTEOS</Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.productInfo}>
              <Text style={[styles.productName, item.name === 'Leite' && styles.leiteName]}>
                {item.name}
              </Text>
              <Text>R$ {item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Adicionar" onPress={() => addToCart(item)} color="#FFD166" />
              <View style={styles.quantityControl}>
                <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.button}>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>
                  {cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0}
                </Text>
                <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.button}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>
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

const CartScreen = ({ route, navigation }) => {
  const { cart } = route.params;
  const [cartItems, setCartItems] = useState(cart);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const clearCart = () => {
    setCartItems([]); // Limpa o carrinho
    navigation.goBack(); // Volta para a tela anterior
  };

  


  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrinho</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name} - R$ {item.price.toFixed(2)}</Text>
            <View style={styles.quantityControl}>
              <Text style={styles.quantity}>{item.quantity}</Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>Total: R$ {calculateTotal()}</Text>
      <TouchableOpacity onPress={clearCart} style={styles.clearCartButton}>
        <Text style={styles.clearCartButtonText}>Limpar Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Categorias" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    backgroundColor: '#62BFCC',
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
    marginBottom: 45,
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
    top: -9,
  },
  

  buttonContainer: {
    width: 100,
    height: 70,
    alignItems: 'center',
  },
  button: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 5,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
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
  clearCartButton: {
    backgroundColor: '#FFD166',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  clearCartButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  
});

