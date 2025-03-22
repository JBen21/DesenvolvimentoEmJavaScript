import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, Button } from 'react-native';
import { useState } from 'react';

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

export default function App() {
  const [showImage, setShowImage] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);

  const handleReveal = () => {
    setShowImage(true);
  };

  const handleSecondButton = () => {
    setShowImage(false);
    setShowSecondImage(true);
  };

  return (
    <View style={styles.container}>
      {!showImage && !showSecondImage && (
        <Button title="..." onPress={handleReveal} />
      )}
      {showImage && !showSecondImage && (
        <>
          <Image source={{ uri: 'https://artpoin.com/wp-content/uploads/2023/03/dia-internacional-da-mulher14.png' }} style={styles.image} />
          <TouchableOpacity style={styles.button} onPress={handleSecondButton}>
            <Text style={styles.buttonText}>...?</Text>
          </TouchableOpacity>
        </>
      )}
      {showSecondImage && (
        <Image source={{ uri: 'https://static.mensagemaniversario.com.br/img/65/f7/avo-guerreira-e-minha-fonte-de-inspiracao-md.jpg' }} style={styles.image2} />
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
  image: {
    width: 200,
    height: 300,
    margin: 20,
  },
  image2: {
    width: 400,
    height: 400,
    margin: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});