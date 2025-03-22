import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from "react";

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [tipo, setTipo] = useState("");
  const [resultado, setResultado] = useState(null);

  function calcularResultado() {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    let res = 0;

    if (tipo === "+") {
      res = numero1 + numero2;
    } else if (tipo === "-") {
      res = numero1 - numero2;
    } else if (tipo === "*") {
      res = numero1 * numero2;
    } else if (tipo === "/") {
      res = numero1 / numero2;
    } else {
      res = "Operação inválida";
    }

    setResultado(res);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Número 1</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setNum1}
        value={num1}
      />

      <Text style={styles.texto}>Sinal + - * /</Text>
      <TextInput
        keyboardType="default"
        style={styles.input}
        onChangeText={setTipo}
        value={tipo}
      />

      <Text style={styles.texto}>Número 2</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setNum2}
        value={num2}
      />

      <TouchableOpacity style={styles.botao} onPress={calcularResultado}>
        <Text style={styles.texto}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {num1}{tipo}{num2}={resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 28,
  },
  input:{
    borderWidth:2,
    borderRadius:10,
    width:largura/2,
    marginBottom: 30,
    fontSize: 16,
    paddingHorizontal:20,
  },
  botao:{
    backgroundColor:'green',
    borderRadius:10,
    padding:10,
    marginTop:30,
    borderWidth:3,
    borderColor:'purple',
  },
  resultado: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
});