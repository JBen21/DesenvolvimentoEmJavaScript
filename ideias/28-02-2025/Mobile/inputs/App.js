import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Dimensions, TextInput} from 'react-native';

const altura = Dimensions.get('screen').height
const largura = Dimensions.get('screen').width

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tgrande}>Olá e seja Bem-vindo ao App da Loja Guilherme Afton!</Text>
      
      <Image style={styles.imagen1} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qk8w1cKjQbjOUGKimFU2iXr9NEiiwC6GHQ&s'}}></Image>

      <Text style={styles.textoU}>Usuario</Text>
      <TextInput style={styles.input} placeholder='Digite seu Nome' secureTextEntry></TextInput>

      <Text style={styles.textoU}>Senha</Text>
      <TextInput style={styles.input} placeholder='Digite sua Senha' secureTextEntry keyboardType='numeric'></TextInput>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.texto}>Logar</Text>
      </TouchableOpacity>

      <Image style={styles.imagen2} source={{uri:'https://static.wikia.nocookie.net/villains/images/b/b2/WilliamAftonHD.png/revision/latest?cb=20240316000240'}}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  input:{
    backgroundColor:'white',
    width: largura/1.5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'violet'
  },
  botao:{
    backgroundColor:'violet',
    width: largura/2,
    alignItems:'center',
    padding:15,
    borderRadius: 10,
    marginTop: 20,
  },
  tgrande:{
    width: largura/1,
    height: altura/20,
    textAlign: 'center',
    fontSize: 20,
    color:'yellow'
  },
  textoU:{
    fontSize:19,
    color:'yellow'
  },
  texto:{
    fontSize:19,
  },
  imagen1:{
    flexDirection:'column',
    padding: 10,
    borderRadius: 150,
    height: altura/4.5,
    width: largura/2,
    justifyContent:'',
    margin: 20,
    borderWidth:2,
    borderColor:'violet'
  },
  imagen2:{
    flex: 1,
    flexDirection:'row',
    padding: 10,
    height: altura/1000,
    width: largura/2.5,
    margin: 10,
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },
});