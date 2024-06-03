import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const ReceitaScreen = () => {
  const [ingrediente1, setIngrediente1] = useState('');
  const [ingrediente2, setIngrediente2] = useState('');
  const [ingrediente3, setIngrediente3] = useState('');
  const [receita, setReceita] = useState('');

  const receitas = [
    {
      nome: 'Salada de Frutas',
      ingredientes: ['Maçã', 'Banana', 'Morango'],
      modoPreparo: 'Pique todas as frutas em cubos. Misture-as em uma tigela e sirva gelada.'
    },
    {
      nome: 'Sanduíche de Frango',
      ingredientes: ['Frango', 'Pão', 'Alface', 'Tomate', 'Maionese'],
      modoPreparo: 'Cozinhe o frango e desfie. Monte o sanduíche com todos os ingredientes e sirva.'
    },
    {
      nome: 'Pizza Margherita',
      ingredientes: ['Massa de pizza', 'Molho de tomate', 'Muçarela', 'Manjericão'],
      modoPreparo: 'Estique a massa, espalhe o molho de tomate, adicione a muçarela e o manjericão. Asse no forno até dourar.'
    },
    {
      nome: 'Lasanha à Bolonhesa',
      ingredientes: ['Massa de lasanha', 'Molho bolonhesa', 'Queijo parmesão', 'Molho bechamel'],
      modoPreparo: 'Monte camadas de massa de lasanha, molho bolonhesa e molho bechamel. Cubra com queijo parmesão e leve ao forno.'
    },
    {
      nome: 'Sopa de Legumes',
      ingredientes: ['Batata', 'Cenoura', 'Abóbora', 'Milho', 'Ervilha'],
      modoPreparo: 'Cozinhe todos os legumes em água fervente até ficarem macios. Bata no liquidificador e sirva quente.'
    },
    {
      nome: 'Risoto de Funghi',
      ingredientes: ['Arroz arbóreo', 'Cogumelos funghi secos', 'Cebola', 'Vinho branco', 'Caldo de legumes', 'Queijo parmesão'],
      modoPreparo: 'Refogue a cebola, adicione o arroz e refogue mais um pouco. Adicione o vinho branco e deixe evaporar. Acrescente os cogumelos previamente hidratados. Cozinhe adicionando o caldo de legumes aos poucos até o arroz ficar al dente. Finalize com queijo parmesão.'
    },
    {
      nome: 'Strogonoff de Carne',
      ingredientes: ['Carne bovina', 'Creme de leite', 'Mostarda', 'Ketchup', 'Cogumelos'],
      modoPreparo: 'Refogue a carne, adicione os cogumelos, a mostarda e o ketchup. Por último, acrescente o creme de leite e deixe cozinhar por alguns minutos. Sirva com arroz e batata palha.'
    },
    {
      nome: 'Pudim de Leite Condensado',
      ingredientes: ['Leite condensado', 'Leite', 'Ovos', 'Açúcar'],
      modoPreparo: 'Bata no liquidificador o leite condensado, o leite e os ovos. Caramelize uma forma com açúcar e despeje a mistura. Asse em banho-maria até ficar firme. Deixe esfriar e leve à geladeira.'
    },
    {
      nome: 'Frango Assado',
      ingredientes: ['Frango inteiro', 'Limão', 'Alho', 'Sal', 'Pimenta', 'Alecrim'],
      modoPreparo: 'Tempere o frango com limão, alho, sal, pimenta e alecrim. Asse no forno até dourar.'
    },
    {
      nome: 'Torta de Limão',
      ingredientes: ['Biscoito maizena', 'Manteiga', 'Leite condensado', 'Suco de limão', 'Creme de leite', 'Gelatina sem sabor'],
      modoPreparo: 'Triture os biscoitos e misture com a manteiga até formar uma massa. Forre o fundo de uma forma e leve ao forno por alguns minutos. Misture o leite condensado com o suco de limão e o creme de leite. Dissolva a gelatina conforme as instruções da embalagem e adicione à mistura. Despeje sobre a massa e leve à geladeira.'
    },
    {
      nome: 'Pão de Queijo',
      ingredientes: ['Polvilho doce', 'Polvilho azedo', 'Ovos', 'Óleo', 'Leite', 'Queijo minas'],
      modoPreparo: 'Misture os polvilhos, os ovos, o óleo e o leite. Acrescente o queijo minas ralado e misture bem. Modele os pãezinhos e leve ao forno até dourar.'
    },
    {
      nome: 'Torta de Frango',
      ingredientes: ['Massa de torta', 'Peito de frango', 'Milho', 'Ervilha', 'Cenoura', 'Cebola', 'Creme de leite'],
      modoPreparo: 'Refogue o frango desfiado com a cebola, a cenoura, o milho e a ervilha. Adicione o creme de leite e misture bem. Forre uma forma com a massa, despeje o recheio e cubra com mais massa. Leve ao forno até dourar.'
    },
    {
      nome: 'Bolo de Chocolate',
      ingredientes: ['Farinha de trigo', 'Açúcar', 'Chocolate em pó', 'Ovos', 'Leite', 'Óleo', 'Fermento em pó'],
      modoPreparo: 'Bata os ovos com o açúcar até ficar fofo. Adicione o leite e o óleo e continue batendo. Acrescente a farinha, o chocolate em pó e o fermento peneirados e misture delicadamente. Despeje em uma forma untada e asse em forno preaquecido.'
    },

  ];

  const gerarReceita = () => {
    const index = Math.floor(Math.random() * receitas.length);
    const { nome, ingredientes, modoPreparo } = receitas[index];
    const novaReceita = `${nome}\n\nIngredientes:\n${ingredientes.join(', ')}\n\nModo de Preparo:\n${modoPreparo}`;
    setReceita(novaReceita);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={require('../assets/icone_receita.png')} style={styles.icon} />
          <Text style={styles.header}>RECEITA DO DIA</Text>
        </View>
        <View style={styles.line} />
        <Text style={styles.subheader}>Coloque os seus ingredientes e falaremos uma deliciosa comida</Text>
        <TextInput
          style={styles.input}
          placeholder="1º ingrediente:"
          value={ingrediente1}
          onChangeText={setIngrediente1}
        />
        <TextInput
          style={styles.input}
          placeholder="2º ingrediente:"
          value={ingrediente2}
          onChangeText={setIngrediente2}
        />
        <TextInput
          style={styles.input}
          placeholder="3º ingrediente:"
          value={ingrediente3}
          onChangeText={setIngrediente3}
        />
        <TouchableOpacity style={styles.button} onPress={gerarReceita}>
          <Text style={styles.buttonText}>GERAR RECEITA</Text>
        </TouchableOpacity>
        {receita ? <Text style={styles.receita}>{receita}</Text> : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  icon: {
    width: 50, // Ajustando o tamanho da imagem
    height: 80, // Ajustando o tamanho da imagem
    marginRight: 10,
  },
  header: {
    top: 15,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E50000',
  },
  line: {
    width: '82%',
    height: 2,
    top: 4,
    marginLeft: 70,
    backgroundColor: '#000',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#E50000',
    paddingVertical: 12, // Reduzindo o padding vertical para diminuir o tamanho do botão
    paddingHorizontal: 30, // Reduzindo o padding horizontal para diminuir o tamanho do botão
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14, // Reduzindo o tamanho da fonte para diminuir o tamanho do texto do botão
    fontWeight: 'bold',
    textAlign: 'center',
  },
  receita: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
});

export default ReceitaScreen;
