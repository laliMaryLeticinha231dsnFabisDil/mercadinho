import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Acesso() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        if (email === 'usuario@example.com' && senha === 'senha123') {
            navigation.navigate('index');
            Alert.alert('Sucesso', 'Login realizado com sucesso.');
        } else {
            Alert.alert('Erro', 'Credenciais inválidas. Por favor, tente novamente.');
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container} >
                    <View style={styles.containerLogo}>
                        <Animatable.Image
                           
                            source={require("../assets/mercado.png")}
                            style={styles.mercado}
                          
                        />

                    </View>
                   <View style={styles.containerLogo}>
                        <Animatable.Image
                           
                            source={require("../assets/login.png")}
                            style={styles.login}
                          
                        />
                    </View>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}></Text>
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
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Acessar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('cadastro')} style={styles.buttonRegister}>
                            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
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
    container: {
        flex: 0,
       
     
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mercado: {
        width: 500,
        height: 250,
    },
    login: {
        width: 100,
        height: 100,
        borderRadius: 20,
     
    },
    containerHeader: {
        marginTop: '5%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF"
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 18,
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
        color: '#000',
        height:100,
        top: -10,
    },
    buttonVoltar: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    }
});
