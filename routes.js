//ESSE CORRETISIMOOO
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import HomeScreen from './pages/HomeScreen';
// import CarrinhoScreen from './pages/carrinhoScreen';
// import CalculadoraScreen from './pages/CalculadoraScreen';
// import PerfilScreen from './pages/PerfilScreen';

// const Tab = createBottomTabNavigator();

// const Routes = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Carrinho') {
//               iconName = focused ? 'cart' : 'cart-outline';
//             } else if (route.name === 'Calculadora') {
//               iconName = focused ? 'calculator' : 'calculator-outline';
//             } else if (route.name === 'Perfil') {
//               iconName = focused ? 'person' : 'person-outline';
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: '#5C0D14',
//           inactiveTintColor: 'gray',
//           justifyContent: 'center', // Centralizar os ícones na barra de navegação inferior
//         }}
//       >
    //     <Tab.Screen 
    //       name="Home" 
    //       component={HomeScreen} 
    //       options={{ 
    //         tabBarLabel: '', // Remove o nome da barra de navegação inferior
    //         headerShown: false // Remove o título da tela
    //       }} 
    //     />
    //     <Tab.Screen 
    //       name="Carrinho" 
    //       component={CarrinhoScreen} 
    //       options={{ 
    //         tabBarLabel: '', // Remove o nome da barra de navegação inferior
    //         headerShown: false // Remove o título da tela
    //       }} 
    //     />
    //     <Tab.Screen 
    //       name="Calculadora" 
    //       component={CalculadoraScreen} 
    //       options={{ 
    //         tabBarLabel: '', // Remove o nome da barra de navegação inferior
    //         headerShown: false // Remove o título da tela
    //       }} 
    //     />
    //     <Tab.Screen 
    //       name="Perfil" 
    //       component={PerfilScreen} 
    //       options={{ 
    //         tabBarLabel: '', // Remove o nome da barra de navegação inferior
    //         headerShown: false // Remove o título da tela
    //       }} 
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
//   );
// }




// export default Routes;











// //esse aquii ta perfect
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import HomeScreen from './pages/HomeScreen';
// import CarrinhoScreen from './pages/carrinhoScreen';
// import CalculadoraScreen from './pages/CalculadoraScreen';
// import PerfilScreen from './pages/PerfilScreen';

// const Tab = createBottomTabNavigator();

// const Routes = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Carrinho') {
//               iconName = focused ? 'cart' : 'cart-outline';
//             } else if (route.name === 'Calculadora') {
//               iconName = focused ? 'calculator' : 'calculator-outline';
//             } else if (route.name === 'Perfil') {
//               iconName = focused ? 'person' : 'person-outline';
//             }

//             return <Ionicons name={iconName} size={30} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: '#5C0D14',
//           inactiveTintColor: 'gray',
//           justifyContent: 'center', // Centralizar os ícones na barra de navegação inferior
//           tabBarStyle: {
//             borderTopWidth: 10, // Adiciona uma borda superior com 10px de largura
//             borderTopColor: '#E5E5E5', // Cor da borda superior
//           },
//           tabStyle: {
//             justifyContent: 'center', // Centralizar verticalmente os ícones
//           },
//           labelStyle: {
//             display: 'none', // Remove o texto dos ícones
//           },
//           iconStyle: {
//             marginTop: 5, // Ajusta o espaçamento superior dos ícones
//           },
//         }}
//       >
//        <Tab.Screen 
//           name="Home" 
//           component={HomeScreen} 
//           options={{ 
//             tabBarLabel: '', // Remove o nome da barra de navegação inferior
//             headerShown: false // Remove o título da tela
//           }} 
//         />
//         <Tab.Screen 
//           name="Carrinho" 
//           component={CarrinhoScreen} 
//           options={{ 
//             tabBarLabel: '', // Remove o nome da barra de navegação inferior
//             headerShown: false // Remove o título da tela
//           }} 
//         />
//         <Tab.Screen 
//           name="Calculadora" 
//           component={CalculadoraScreen} 
//           options={{ 
//             tabBarLabel: '', // Remove o nome da barra de navegação inferior
//             headerShown: false // Remove o título da tela
//           }} 
//         />
//         <Tab.Screen 
//           name="Perfil" 
//           component={PerfilScreen} 
//           options={{ 
//             tabBarLabel: '', // Remove o nome da barra de navegação inferior
//             headerShown: false // Remove o título da tela
//           }} 
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
   
//   );
// }

// export default Routes;









import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './pages/HomeScreen';
import CarrinhoScreen from './pages/carrinhoScreen';
import CalculadoraScreen from './pages/CalculadoraScreen';
import PerfilScreen from './pages/PerfilScreen';
import CompraScreen from './pages/compraScreen';
import HistoricoScreen from './pages/HistoricoScreen';
import ReceitaScreen from './pages/ReceitaScreen';
import CadastroScreen from './pages/CadastroScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Compra" component={CompraScreen} options={{ headerShown: false }} />
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

