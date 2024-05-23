import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './pages/HomeScreen';
import CarrinhoScreen from './pages/carrinhoScreen';
import CalculadoraScreen from './pages/CalculadoraScreen';
import PerfilScreen from './pages/PerfilScreen';
import CompraScreen from './pages/CompraScreen';
import HistoricoScreen from './pages/HistoricoScreen';
import ReceitaScreen from './pages/ReceitaScreen';
import CadastroScreen from './pages/CadastroScreen';
import CompraIntermediariaScreen from './pages/CompraIntermediariaScreen';
import Frutas from './pages/frutas';  // Importar todas as novas telas
import GraosECereais from './pages/graisecereais';
import ProdutosLacteos from './pages/produtoslacteos';
import LegumesEVegetais from './pages/legumes';
import ProdutosPanificacao from './pages/produtospanificados';
import ProdutosProcessados from './pages/produtosprocessados';
import Carnes from './pages/carnes';
import HigienePessoal from './pages/produtoshigienicos';
import ProdutosLimpeza from './pages/produtosdelimpeza';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CompraIntermediaria" component={CompraIntermediariaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Compra" component={CompraScreen} options={{ headerShown: false }} />
      <Stack.Screen name="frutas" component={Frutas} options={{ headerShown: false }} />
      <Stack.Screen name="graisecereais" component={GraosECereais} options={{ headerShown: false }} />
      <Stack.Screen name="ProdutosLacteos" component={ProdutosLacteos} options={{ headerShown: false }} />
      <Stack.Screen name="LegumesEVegetais" component={LegumesEVegetais} options={{ headerShown: false }} />
      <Stack.Screen name="ProdutosPanificacao" component={ProdutosPanificacao} options={{ headerShown: false }} />
      <Stack.Screen name="ProdutosProcessados" component={ProdutosProcessados} options={{ headerShown: false }} />
      <Stack.Screen name="Carnes" component={Carnes} options={{ headerShown: false }} />
      <Stack.Screen name="HigienePessoal" component={HigienePessoal} options={{ headerShown: false }} />
      <Stack.Screen name="ProdutosLimpeza" component={ProdutosLimpeza} options={{ headerShown: false }} />
      <Stack.Screen name="Historico" component={HistoricoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Receita" component={ReceitaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Carrinho') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Calculadora') {
              iconName = focused ? 'calculator' : 'calculator-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5C0D14',
          inactiveTintColor: 'gray',
          justifyContent: 'center',
          tabBarStyle: {
            borderTopWidth: 10,
            borderTopColor: '#E5E5E5',
          },
          tabStyle: {
            justifyContent: 'center',
          },
          labelStyle: {
            display: 'none',
          },
          iconStyle: {
            marginTop: 5,
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ 
            tabBarLabel: '', 
            headerShown: false 
          }} 
        />
        <Tab.Screen 
          name="Carrinho" 
          component={CarrinhoScreen} 
          options={{ 
            tabBarLabel: '', 
            headerShown: false 
          }} 
        />
        <Tab.Screen 
          name="Calculadora" 
          component={CalculadoraScreen} 
          options={{ 
            tabBarLabel: '', 
            headerShown: false 
          }} 
        />
        <Tab.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ 
            tabBarLabel: '', 
            headerShown: false 
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
