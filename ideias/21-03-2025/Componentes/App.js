import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';

const {width, heigth} = Dimensions.get("screen")

export default function App() {

  const MeuTexto = (props)=>{
    return(
      <View style={styles.card}>
        <Text style={styles.texto}>{props.mensagen}</Text>
        <Image style={styles.image} source={{uri:`${props.caminho_foto}`}}/>
      </View>
    )
  }

  const MeuBotao = (props)=>{
    return(
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.btnTexto}>{props.titulo}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <MeuTexto mensagen="Meu primeiro Componente" caminho_foto="https://pm1.aminoapps.com/7518/8cb5081ba35645445d0b0b1a21a64e7414ded322r1-549-480v2_uhq.jpg"/>
        <MeuTexto mensagen="Turma DEV-A 2025" caminho_foto="https://i.ytimg.com/vi/gDIe-qyRids/sddefault.jpg"/>
        <MeuTexto mensagen="Turma DEV-A 2025" caminho_foto="https://images3.memedroid.com/images/UPLOADED450/6779521c23460.jpeg"/>
        <MeuTexto mensagen="Turma DEV-A 2025" caminho_foto="https://i.pinimg.com/236x/3a/c4/d8/3ac4d8db56d5a5e02df01e92cd776b68.jpg"/>
        <MeuBotao titulo="Cadastrar"/>
        <MeuBotao titulo="Logar"/>
      </ScrollView>
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
    fontSize:20,
    backgroundColor:'rgb(144,238,144)',
  },
  botao:{
    backgroundColor:'rgb(0,191,255)',
    padding:10,
    borderRadius:10,
    margin: 12,
  },
  btnTexto:{
    fontSize:30,
    color:"white",
    alignContent:'center'
  },
  image:{
    width: width/1.2,
    height:500,
  },
  card:{
    backgroundColor:'rgb(248,248,255)',
    padding:20,
    width:width/1.1,
    marginVertical:10,
    justifyContent:'center',
    alignItems:"center",
  }
});
