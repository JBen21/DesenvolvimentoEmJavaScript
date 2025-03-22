import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  //

  

  //
  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
      <View style={styles.horizontal}>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
      </View>
      <View style={styles.box5}></View>
      <View style={styles.ajeitar}>
        <View>
          <View style={styles.box6}></View>
        </View>
        <View>
          <View style={styles.box7}></View>
          <View style={styles.box8}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor:'white',
    flexWrap:'wrap'
  },
  horizontal:{
    flexDirection:"row"
  },
  box1:{
    width:100,
    height:100,
    backgroundColor:'red',
    margin:10,
    marginTop:100,
    borderRadius:10,
  },
  box2:{
    width:250,
    height:100,
    backgroundColor:'blue',
    margin:10,
    marginTop:100,
    borderRadius:10,
  },
  box3:{
    width:250,
    height:100,
    backgroundColor:'yellow',
    margin:10,
    borderRadius:10,
  },
  box4:{
    width:100,
    height:100,
    backgroundColor:'magenta',
    margin:10,
    borderRadius:10,
  },
  box5:{
    width:370,
    height:100,
    backgroundColor:'#898fcc',
    margin:10,
    borderRadius:10,
  },
  box6:{
    width:150,
    height:250,
    backgroundColor:'orange',
    margin:10,
    borderRadius:10,
  },
  ajeitar:{
    flexDirection:'row'
  },
  box7:{
    width:200,
    height:100,
    backgroundColor:'darkorange',
    margin:10,
    borderRadius:10,
  },
  box8:{
    width:200,
    height:100,
    backgroundColor:'lime',
    margin:10,
    borderRadius:10,
    marginTop:40
  },
  texto:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    backgroundColor:'red',
    width:100,
    textAlign:'center',
  },
})