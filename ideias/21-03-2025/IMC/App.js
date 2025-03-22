import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useState } from "react";

const largura = Dimensions.get("screen").width;


const imagensIMC = {
  //abaixo: require("./assets/Abaixo_peso.png"),
  //normal: require("./assets/No_peso.png"),
  //sobrepeso: require("./assets/Acima_do_peso.png"),
  //obesidade1: require("./assets/Obesidade_1.png"),
  //obesidade2: require("./assets/Obesidade_2.png"),
  //obesidade3: require("./assets/Obesidade_3.png"),
};

export default function App() {
  const [paltura, setPaltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(null);
  const [total, setTotal] = useState(null);
  const [imagem, setImagem] = useState(null);

  function IMC() {
    const alturaNum = parseFloat(paltura);
    const pesoNum = parseFloat(peso);

    if (isNaN(alturaNum) || isNaN(pesoNum) || alturaNum <= 0) {
      setResultado("Por favor, insira valores válidos.");
      setImagem(null);
      return;
    }

    const totalIMC = pesoNum / (alturaNum * alturaNum);
    let res = "";
    let img = null;

    if (totalIMC < 18.5) {
      res = "Seu peso está abaixo do normal.";
      setImagem({uri:"./assets/Abaixo_peso.png"})
    } else if (totalIMC < 25) {
      res = "Seu peso está normal.";
      //img = imagensIMC.normal;
    } else if (totalIMC < 30) {
      res = "Você está com excesso de peso.";
      //img = imagensIMC.sobrepeso;
    } else if (totalIMC < 35) {
      res = "Você está com obesidade grau 1.";
      //img = imagensIMC.obesidade1;
    } else if (totalIMC < 40) {
      res = "Você está com obesidade grau 2.";
      //img = imagensIMC.obesidade2;
    } else {
      res = "Você está com obesidade grau 3.";
      //img = imagensIMC.obesidade3;
    }

    setTotal(totalIMC.toFixed(2));
    setResultado(res);
    //setImagem(img);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <Text style={styles.texto}>Informe sua altura (m):</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setPaltura}
        value={paltura}
        placeholder="Ex: 1.75"
      />

      <Text style={styles.texto}>Informe seu peso (kg):</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setPeso}
        value={peso}
        placeholder="Ex: 70"
      />

      <TouchableOpacity style={styles.botao} onPress={IMC}>
        <Text style={styles.textoBotao}>Calcular IMC</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>IMC: {total}</Text>
          <Text style={styles.resultadoTexto}>{resultado}</Text>
          {imagem && <Image source={imagem} style={styles.imagem} />}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  texto: {
    fontSize: 18,
    marginBottom: 5,
    color: "#555",
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    width: largura * 0.6,
    height: 40,
    marginBottom: 15,
    fontSize: 16,
    paddingHorizontal: 10,
    borderColor: "#777",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  botao: {
    backgroundColor: "#28a745",
    borderRadius: 10,
    padding: 12,
    marginTop: 20,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultadoContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  resultadoTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 5,
  },
  imagem: {
    width: 150,
    height: 150,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 3,
  },
});