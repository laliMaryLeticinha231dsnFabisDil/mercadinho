// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import HomeScreen from './pages/HomeScreen';
// import CarrinhoScreen from './pages/carrinhoScreen';
// import CalculadoraScreen from './pages/CalculadoraScreen';

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
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'blue',
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Carrinho" component={CarrinhoScreen} />
//         <Tab.Screen name="Calculadora" component={CalculadoraScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default Routes;




// esse deu certo debaixp

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
//         }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Carrinho" component={CarrinhoScreen} />
//         <Tab.Screen name="Calculadora" component={CalculadoraScreen} />
//         <Tab.Screen name="Perfil" component={PerfilScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default Routes;







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



import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './pages/HomeScreen';
import CarrinhoScreen from './pages/carrinhoScreen';
import CalculadoraScreen from './pages/CalculadoraScreen';
import PerfilScreen from './pages/PerfilScreen';

const Tab = createBottomTabNavigator();

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
          justifyContent: 'center', // Centralizar os ícones na barra de navegação inferior
          tabBarStyle: {
            borderTopWidth: 10, // Adiciona uma borda superior com 10px de largura
            borderTopColor: '#E5E5E5', // Cor da borda superior
          },
          tabStyle: {
            justifyContent: 'center', // Centralizar verticalmente os ícones
          },
          labelStyle: {
            display: 'none', // Remove o texto dos ícones
          },
          iconStyle: {
            marginTop: 5, // Ajusta o espaçamento superior dos ícones
          },
        }}
      >
       <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            tabBarLabel: '', // Remove o nome da barra de navegação inferior
            headerShown: false // Remove o título da tela
          }} 
        />
        <Tab.Screen 
          name="Carrinho" 
          component={CarrinhoScreen} 
          options={{ 
            tabBarLabel: '', // Remove o nome da barra de navegação inferior
            headerShown: false // Remove o título da tela
          }} 
        />
        <Tab.Screen 
          name="Calculadora" 
          component={CalculadoraScreen} 
          options={{ 
            tabBarLabel: '', // Remove o nome da barra de navegação inferior
            headerShown: false // Remove o título da tela
          }} 
        />
        <Tab.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ 
            tabBarLabel: '', // Remove o nome da barra de navegação inferior
            headerShown: false // Remove o título da tela
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
   
  );
}

export default Routes;
