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
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('../assets/1.png'),
    require('../assets/2.png'),
    require('../assets/3.png'),
    require('../assets/4.png'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <View style={styles.container}>
      <Image source={images[currentImageIndex]} style={styles.image} />
      <View style={styles.lr}>
        <Image
          source={require('../assets/imagem.png')} // Caminho para a imagem
          style={styles.ooo}
        />
        <Text style={styles.text}>Exemplo de texto</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
  },
  image: {
    width: 410,
    height: 285,
    resizeMode: 'cover',
  },
  lr: {
    backgroundColor: '#B60918',
    borderRadius: 20,
    width: 240,
    height: 140,
    top: 50,

  },
  ooo: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginBottom: 10,

  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFF',
  },
});

export default Carousel;
