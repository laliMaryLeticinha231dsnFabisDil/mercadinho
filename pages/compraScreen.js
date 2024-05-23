




import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { name: 'FRUTAS', image: require('../assets/frutas.png'), screen: 'Frutas' },
  { name: 'GRÃOS E CEREAIS', image: require('../assets/graos_cereais.png'), screen: 'GraosECereais' },
  { name: 'PRODUTOS LÁCTEOS', image: require('../assets/produtos_lacteos.png'), screen: 'ProdutosLacteos' },
  { name: 'LEGUMES E VEGETAIS', image: require('../assets/legumes_vegetais.png'), screen: 'LegumesEVegetais' },
  { name: 'PRODUTOS PANIFICAÇÃO', image: require('../assets/produtos_panificacao.png'), screen: 'ProdutosPanificacao' },
  { name: 'PRODUTOS PROCESSADOS', image: require('../assets/produtos_processados.png'), screen: 'ProdutosProcessados' },
  { name: 'CARNES', image: require('../assets/carnes.png'), screen: 'Carnes' },
  { name: 'HIGIENE PESSOAL', image: require('../assets/higiene_pessoal.png'), screen: 'HigienePessoal' },
  { name: 'PRODUTOS DE LIMPEZA', image: require('../assets/produtos_limpeza.png'), screen: 'ProdutosLimpeza' },
];

const CompraScreen = ({ route }) => {
  const { valor } = route.params || {};
  const navigation = useNavigation();

  const handleCategoryPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>CATEGORIAS</Text>
      {valor && <Text style={styles.valor}>Valor da Compra: {valor}</Text>}
      <View style={styles.grid}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => handleCategoryPress(category.screen)}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.label}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E50000',
    textAlign: 'center',
    marginVertical: 20,
  },
  valor: {
    fontSize: 18,
    color: '#E50000',
    textAlign: 'center',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  item: {
    width: '40%',
    aspectRatio: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E50000',
    textAlign: 'center',
  },
});

export default CompraScreen;
