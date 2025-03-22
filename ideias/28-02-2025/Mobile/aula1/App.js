import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={meuCSS.container}>
      <Text style={meuCSS.meuTexto}>Guilherme da Conceição Cevada.</Text>
      <Text style={meuCSS.meuTexto2}>Turma DEV 3EM.</Text>
      <Text style={meuCSS.meuTexto3}>Eu moro em Presidente Prudente.</Text>
      <Text style={meuCSS.meuTexto4}>Tenho 17 anos e em breve irei fazer 18.</Text>
      <Text style={meuCSS.meuTexto5}>Nasci em 03 de Agosto de 2007.</Text>
      <Text style={meuCSS.meuTexto6}>Atualmente estudo na escola SESI Antônion Scalon 423 e No SENAI.</Text>
      <Text style={meuCSS.meuTexto7}>Estou no Terceiro ano do Ensino Médio.</Text>
      <Text style={meuCSS.meuTexto8}>Eu nunca até agora repeti de ano.</Text>
      <Text style={meuCSS.meuTexto9}>Uso oculus.</Text>
      <Text style={meuCSS.meuTexto10}>E eu gosto de jogos, principalmente MetroidVanias.</Text>
    </View>
  );
}

const meuCSS = StyleSheet.create({
  meuTexto:{
    color:"purple",
    fontSize:20,
    fontWeight:'bold'
  },
  meuTexto2:{
    color:"Yellow",
    fontSize:18,
  },
  meuTexto3:{
    color:"lime",
    fontSize:18,
  },
  meuTexto4:{
    color:"black",
    fontSize:18,
  },
  meuTexto5:{
    color:"orange",
    fontSize:18,
  },
  meuTexto6:{
    color:"red",
    fontSize:18,
  },
  meuTexto7:{
    color:"cyan",
    fontSize:18,
  },
  meuTexto8:{
    color:"gray",
    fontSize:18,
  },
  meuTexto9:{
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  },
  meuTexto10:{
    color:"lightseagreen",
    fontSize:20,
  },
  container:{
    textAlign:"center",
    alignItems:"center"
  }
})