import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import styles from './src/components/Style';

export default function App() {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [numeros, setNumeros] = useState([]);

  function gerarNumerosAleatorios() {
    if (min && max) {
      const novoArray = [];
      for (let i = 0; i < 5; i++) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min;
        novoArray.push(numero);
      }
      setNumeros(novoArray);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Valor mínimo:</Text>
      <TextInput
        style={styles.input}
        value={min}
        onChangeText={valor => setMin(parseInt(valor))}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Valor máximo:</Text>
      <TextInput
        style={styles.input}
        value={max}
        onChangeText={valor => setMax(parseInt(valor))}
        keyboardType="numeric"
      />
      <Button title="Gerar números aleatórios" onPress={gerarNumerosAleatorios} />
      <FlatList
        data={numeros}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}
