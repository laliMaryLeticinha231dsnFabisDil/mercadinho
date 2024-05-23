import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { name: 'FRUTAS', image: require('../assets/frutas.png'), screen: 'frutas' },
  { name: 'GRÃOS E CEREAIS', image: require('../assets/graos_cereais.png'), screen: 'graosecereais' },
  { name: 'PRODUTOS LÁCTEOS', image: require('../assets/produtos_lacteos.png'), screen: 'produtoslacteos' },
  { name: 'LEGUMES E VEGETAIS', image: require('../assets/legumes_vegetais.png'), screen: 'legumes' },
  { name: 'PRODUTOS PANIFICAÇÃO', image: require('../assets/produtos_panificacao.png'), screen: 'produtospanificados' },
  { name: 'PRODUTOS PROCESSADOS', image: require('../assets/produtos_processados.png'), screen: 'produtosprocessados' },
  { name: 'CARNES', image: require('../assets/carnes.png'), screen: 'carnes' },
  { name: 'HIGIENE PESSOAL', image: require('../assets/higiene_pessoal.png'), screen: 'higienepessoal' },
  { name: 'PRODUTOS DE LIMPEZA', image: require('../assets/produtos_limpeza.png'), screen: 'produtosdelimpeza' },
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
      <View style={styles.separator} />
      {valor && <Text style={styles.valor}>Valor da Compra: {valor}</Text>}
      <View style={styles.grid}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => handleCategoryPress(category.screen)}>
            <Image source={category.image} style={[styles.image, category.name === 'PRODUTOS PANIFICAÇÃO' ? styles.bakeryImage : null]} />
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
    textAlign: 'rigth',
    marginLeft: 20,
    marginTop: 40,
    marginVertical: 17,
  },
  separator: { //linha
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 25,
    marginLeft: 80,
    width: 350,
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
    width: '44%',
    aspectRatio: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  bakeryImage: {
    width: 90, // Ajuste apenas para a imagem de produtos panificação
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E50000',
    textAlign: 'center',
  },
});

export default CompraScreen;
