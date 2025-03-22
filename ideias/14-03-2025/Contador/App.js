import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions, Alert } from 'react-native';

const largura = Dimensions.get("screen").width
const altura = Dimensions.get("screen").height

export default function App() {

  //const programador = "Guilherme Cevada"

  const [programador1, setProgramador1] = useState("Guilherme C")
  const [contador, setcontador]= useState(0)

  function incrementar() {
    setcontador(contador+1)
  }

  function zerar() {
    setcontador(0)
    Alert.alert("Titulo da Msg","Contador Zerado")
  }

  return (
    <ImageBackground resizeMode='cover' source={{uri:'https://wallpaper.forfun.com/fetch/0c/0c6d9944ffa6cafbe2239e289885084e.jpeg'}} style={styles.container}>
      <Text style={styles.texto1}>Desenvolvido por {programador1}</Text>
      <Text style={styles.texto2}>Contador: {contador}</Text>

      <TouchableOpacity onPress={incrementar} style={styles.btn}>
        <Text style={styles.texto2}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={zerar} style={styles.btn}>
        <Text style={styles.texto2}>Zerar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto1:{
    color:'mediumspringgreen',
    fontSize:30,
    marginVertical:20,
    textAlign:'center',
    fontWeight:'bold',
  },
  texto2:{
    color:'darkmagenta',
    fontSize:28,
    marginVertical:20,
    textAlign:'center',
    fontWeight:'bold',
  },
  btn:{
    backgroundColor:'royalblue',
    width:largura / 2,
    height:altura / 12,
    borderRadius:25,
    marginBottom: 20,
  },
});