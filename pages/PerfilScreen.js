import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const PerfilScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        console.log("User loaded from AsyncStorage:", parsedUser);
        setUser(parsedUser);
      }
    };

    loadUser();
  }, []);

  const handleSelectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permissão negada', 'É necessário conceder permissão para acessar a galeria de fotos.');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      console.log("Image selected:", pickerResult.uri);  // Log the selected image URI
      const updatedUser = { ...user, profileImage: pickerResult.uri };
      setUser(updatedUser);
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      console.log("User updated with new profile image:", updatedUser);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelectImage} style={styles.profileImageContainer}>
        {user && user.profileImage ? (
          <Image source={{ uri: user.profileImage }} style={styles.profileImage} resizeMode="cover" />
        ) : (
          <Text style={styles.profileImageText}>Adicionar Foto</Text>
        )}
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Perfil</Text>
        {user && <Text style={styles.text}>Email: {user.email}</Text>}
        {user && <Text style={styles.text}>Senha: {user.password}</Text>}
        {user && <Text style={styles.text}>Telefone: {user.phone}</Text>}
        {user && <Text style={styles.text}>Idade: {user.age}</Text>}
        {user && <Text style={styles.text}>Data de Nascimento: {user.birthDate}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32, // Increased margin to add space between image and info
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  profileImageText: {
    fontSize: 18,
    color: '#666',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    width: '90%',
    alignItems: 'flex-start',
    elevation: 3, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: '#5C0D14',
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: '#5C0D14',
    textAlign: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
    color: '#333',
  },
});

export default PerfilScreen;
