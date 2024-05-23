import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('../assets/1.png'),
    require('../assets/2.png'),
    require('../assets/3.png'),
    require('../assets/4.png'),
  ];

  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.primeiraCoisa}>
        <Image source={images[currentImageIndex]} style={styles.image} />

        <TouchableOpacity onPress={() => handleNavigate('CompraIntermediaria')}>
          <View style={styles.estiloImagem}>
            <Image
              source={require('../assets/imagem.png')}
              style={styles.ImagemEstilo}
            />
            <Text style={styles.text}>FAÇA SUA{"\n"}COMPRA</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigate('Historico')}>
          <View style={styles.imagemDois}>
            <Image
              source={require('../assets/imagem2.png')}
              style={styles.ImagemEstiloDois}
            />
            <Text style={styles.text}>HISTÓRICO DE{"\n"}COMPRA</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigate('Cadastro')}>
          <View style={styles.imagemTres}>
            <Image
              source={require('../assets/imagem3.png')}
              style={styles.ImagemEstiloTres}
            />
            <Text style={styles.text}>VEJA SEU{"\n" }  PERFIL!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigate('Receita')}>
          <View style={styles.imagemQuatro}>
            <Image
              source={require('../assets/imagem4.png')}
              style={styles.ImagemEstiloQuatro}
            />
            <Text style={styles.text}>RECEITA DO{"\n"}DIA</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  primeiraCoisa: {
    alignItems: 'center',
    marginBottom: 60,
    backgroundColor: 'white',
  },
  image: {
    width: 440,
    height: 248,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  estiloImagem: {
    backgroundColor: '#B60918',
    borderRadius: 20,
    width: 340,
    height: 160,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 50,
    padding: 20,
  },
  ImagemEstilo: {
    width: 134,
    height: 93,
    marginLeft: 4,
    resizeMode: 'cover',
  },
  imagemDois: {
    backgroundColor: '#B60918',
    borderRadius: 20,
    width: 340,
    top: 50,
    height: 160,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  ImagemEstiloDois: {
    width: 134,
    height: 130,
    marginLeft: 4,
    resizeMode: 'cover',
  },
  imagemTres: {
    top: 50,
    backgroundColor: '#B60918',
    borderRadius: 20,
    width: 340,
    height: 160,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  ImagemEstiloTres: {
    width: 134,
    height: 130,
    marginLeft: 4,
    resizeMode: 'cover',
  },
  imagemQuatro: {
    top: 50,
    backgroundColor: '#B60918',
    borderRadius: 20,
    width: 340,
    height: 160,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  ImagemEstiloQuatro: {
    width: 134,
    height: 130,
    marginLeft: 4,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFF',
    marginRight: 27,
    textAlign: 'center',
  },
});

export default HomeScreen;
