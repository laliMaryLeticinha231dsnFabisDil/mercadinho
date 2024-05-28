import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Acesso() {
    const navigation = useNavigation();


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {

        if(email === "" | senha === "") {
            navigation.navigate('index');

            Alert.alert("Preencha todos os campos");

        } else {

            Alert.alert("Cadastro concluido com sucesso, receba ofertas impendiveis ");
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View style={styles.containerLogo}>
                        <Animatable.Image

                            source={require("../assets/login.png")}
                            style={styles.login}

                        />
                    </View>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Faça seu cadastro para ficar por dentro de todas nossas ofertas!</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>E-mail</Text>
                        <TextInput
                            placeholder='Digite um email...'
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                        />
                        <Text style={styles.title}>Senha</Text>
                        <TextInput
                            placeholder='Sua senha'
                            style={styles.input}
                            onChangeText={setSenha}
                            value={senha}
                            secureTextEntry
                        />
                        <Text style={styles.title}>Senha</Text>
                        <TextInput
                            placeholder='Confirme sua senha'
                            style={styles.input}
                            onChangeText={setSenha}
                            value={senha}
                            secureTextEntry
                        />
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Acessar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('entrada')} style={styles.buttonRegister}>
                            <Text style={styles.registerText}>Já possui uma conta? Clique aqui para entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('index')}>
                            <Text style={styles.buttonVoltar}>Voltar ao inicio</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    /*  container: {
          flex: 1,
          backgroundColor: '#880000'
      },*/
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 20,
      textDecoration: 'justify',
        alignItems: 'center',
        marginTop: 10,
        color: '#000',
        paddingHorizontal: 40,
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    login: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginLeft: 150,
        top: 40,
    },
    title: {
        fontSize: 20,
        marginTop: 16,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#F21313',
        width: 350,
        height:50,
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    },
    buttonVoltar: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    }
});
