import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ListaDeCompras = () => {
  const [item, setItem] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('1');
  const [lista, setLista] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calcularTotal();
  }, [lista]);

  const adicionarItem = () => {
    if (item.trim() !== '' && preco.trim() !== '') {
      const newItem = { nome: item, preco: parseFloat(preco), quantidade: parseInt(quantidade) };
      setLista([...lista, newItem]);
      setItem('');
      setPreco('');
      setQuantidade('1');
    }
  };

  const removerItem = (index) => {
    const newLista = [...lista];
    newLista.splice(index, 1);
    setLista(newLista);
  };

  const modificarQuantidade = (index, newQuantidadeText) => {
    const newQuantidade = parseInt(newQuantidadeText);
    if (!isNaN(newQuantidade)) {
      const newLista = [...lista];
      newLista[index].quantidade = newQuantidade;
      setLista(newLista);
    }
  };

  const limparLista = () => {
    setLista([]);
  };

  const calcularTotal = () => {
    let totalCalculado = 0;
    lista.forEach(item => {
      totalCalculado += item.preco * item.quantidade;
    });
    setTotal(totalCalculado);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Produto"
          value={item}
          onChangeText={text => setItem(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          keyboardType="numeric"
          value={preco}
          onChangeText={text => setPreco(text)}
        />
        <TextInput
          style={[styles.input, { width: 60 }]}
          placeholder="Qtd"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={text => setQuantidade(text)}
        />
      </View>
      <Button title="Adicionar" onPress={adicionarItem} />
      <FlatList
        style={styles.lista}
        data={lista}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>
              {item.nome} - R$ {item.preco.toFixed(2)} - Qtd: {item.quantidade}
            </Text>
            <View style={styles.buttonsContainer}>
              <Button title="Remover" onPress={() => removerItem(index)} />
              
            


            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
      <Button title="Limpar Lista" onPress={limparLista} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  lista: {
    marginTop: 20,
    width: '80%',
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  item: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputQuantidade: {
    width: 60,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ListaDeCompras;
