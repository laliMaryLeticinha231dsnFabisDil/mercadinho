// import React, { useState, useEffect } from 'react';
// import { View, Image, StyleSheet } from 'react-native';

// const Carousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [
//     require('../assets/1.png'),
//     require('../assets/2.png'),
//     require('../assets/3.png'),
//     require('../assets/4.png'),
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <View style={styles.container}>
//       <Image source={images[currentImageIndex]} style={styles.image} />
//     </View>
//   );
// };




//     <View style={styles.lr}>
//       <Image
//         source={require('./assets/imagem.png')} // Caminho para a imagem
//         style={styles.ooo}
//       />
//       <Text style={styles.text}>Exemplo de texto</Text>
//     </View>



// const styles = StyleSheet.create({
//  //carrossel aqui
//   container: {
//     flex: 4,
//     alignItems: 'center',
//   },
//   image: {
//     width: 410,
//     height: 285,
//     resizeMode: 'cover',
//   },
// });



// export default Carousel;

/// essseeee aquiiiiiii ta perfect
// import React, { useState, useEffect } from 'react';
// import { View, Image, StyleSheet, Text } from 'react-native';

// const Carousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [
//     require('../assets/1.png'),
//     require('../assets/2.png'),
//     require('../assets/3.png'),
//     require('../assets/4.png'),
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <View style={styles.primeiraCoisa}>
//       <Image source={images[currentImageIndex]} style={styles.image} />
//       <View style={styles.estiloImagem}>
//         <Image
//           source={require('../assets/imagem.png')} // Caminho para a imagem
//           style={styles.ImagemEstilo}
//         />
//         <Text style={styles.text}>FAÇA SUA 
//           COMPRA</Text>
//       </View>
//     </View>
    
    
//   );
 
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 4,
//     alignItems: 'center',
//   },
//   primeiraCoisa: {
//     alignItems: 'center',

//   }, //carrossel
//   image: {
//     width: 440,
//     height: 248,
//     resizeMode: 'cover',
//   },//caixaa vermelho
//   estiloImagem: {
//     backgroundColor: '#B60918',
//     borderRadius: 20,
//     width: 340,
//     height: 160,
//     top: 50,
    

//   },//icone da caixa vermelha
//   ImagemEstilo: {
//     width: 130,
//     height: 90,
//     resizeMode: 'cover',
//     marginBottom: 10,

//   },
//   text: {
//     left: 130,
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#FFFF',
//   },
// });

// export default Carousel;





//ESDSEEE AQ7UWUIIII TA BOMMM???????
// import React, { useState, useEffect } from 'react';
// import { View, Image, StyleSheet, Text } from 'react-native';

// const Carousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [
//     require('../assets/1.png'),
//     require('../assets/2.png'),
//     require('../assets/3.png'),
//     require('../assets/4.png'),
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <View style={styles.primeiraCoisa}>
//       <Image source={images[currentImageIndex]} style={styles.image} />
//       <View style={styles.estiloImagem}>
//         <Image
//           source={require('../assets/imagem.png')} // Caminho para a imagem
//           style={styles.ImagemEstilo}
//         />
//         <Text style={styles.text}>FAÇA SUA{"\n"}COMPRA</Text>
//       </View>
//       {/* segunda coisa */}

//       <View style={styles.imagemDois}>
//         <Image
//           source={require('../assets/imagem2.png')} // Caminho para a imagem
//           style={styles.ImagemEstiloDois}
//         />
//         <Text style={styles.text}>HISTÓRICO DE{"\n"}COMPRA</Text>
//       </View>
//     </View>
    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 4,
//     alignItems: 'center',
//   },
//   ImagemEstiloDois:{
//     width: 134,
//     height: 130,
//     marginLeft: 4,
//     resizeMode: 'cover',
//   },
//   imagemDois:{
//     backgroundColor: '#B60918',
//     borderRadius: 20,
//     width: 340,
//     height: 160,
//     top: 90,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   primeiraCoisa: {
//     alignItems: 'center',
//   }, //carrossel
//   image: {
//     width: 440,
//     height: 248,
//     resizeMode: 'cover',
//   },//caixaa vermelho
//   estiloImagem: {
//     backgroundColor: '#B60918',
//     borderRadius: 20,
//     width: 340,
//     height: 160,
//     top: 50,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 10,
//   },//icone da caixa vermelha
//   ImagemEstilo: {
//     width: 134,
//     height: 93,
//     marginLeft: 4,
//     resizeMode: 'cover',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFFF',
//     marginRight: 27,
//     textAlign: 'center', // opcional, para centralizar o texto dentro da view
//   },
// });

// export default Carousel;
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Carousel = () => {
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

  const handleNavigateToCategoria = () => {
    navigation.navigate('Categoria');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.primeiraCoisa}>
        <Image source={images[currentImageIndex]} style={styles.image} />

        <TouchableOpacity onPress={handleNavigateToCategoria}>
          <View style={styles.estiloImagem}>
            <Image
              source={require('../assets/imagem.png')}
              style={styles.ImagemEstilo}
            />
            <Text style={styles.text}>FAÇA SUA{"\n"}COMPRA</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.imagemDois}>
          <Image
            source={require('../assets/imagem2.png')}
            style={styles.ImagemEstiloDois}
          />
          <Text style={styles.text}>HISTÓRICO DE{"\n"}COMPRA</Text>
        </View>

        <View style={styles.imagemTres}>
          <Image
            source={require('../assets/imagem3.png')}
            style={styles.ImagemEstiloTres}
          />
          <Text style={styles.text}>CARRINHO DE{"\n"}COMPRAS</Text>
        </View>

        <View style={styles.imagemQuatro}>
          <Image
            source={require('../assets/imagem4.png')}
            style={styles.ImagemEstiloQuatro}
          />
          <Text style={styles.text}>RECEITA DO{"\n"}DIA</Text>
        </View>
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
    height: 140,
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

export default Carousel;
