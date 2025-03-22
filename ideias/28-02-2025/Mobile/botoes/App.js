import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';

const altura = Dimensions.get('screen').height
const largura = Dimensions.get('screen').width

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.fundo} source={{uri:'https://wallpaper.forfun.com/fetch/0c/0c6d9944ffa6cafbe2239e289885084e.jpeg'}} resizeMode='cover'>
      <TouchableOpacity style={styles.whatsapp}>
        <Image style={styles.icone} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png'}}></Image>
        <Text>Whatsapp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.whatsapp}>
        <Image style={styles.icone} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'}}></Image>
        <Text>Instagram</Text>
      </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  fundo:{
    height:altura,
    width:largura,
  },
  whatsapp:{
    padding: 10,
    borderRadius: 30,
    height: 60,
    textAlign:'center',
    justifyContent:'center',
    margin: 20,
  },
  icone:{
    width: 80,
    height: 80,
  }
});
