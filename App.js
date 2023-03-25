
import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from './assets/snack-icon.png';

class App extends Component {
  render() {
  return(
    <View style={style.container}>
    <View style={style.container1}>
    <Text style={style.text}> hello world!!!</Text>
     <Image style={style.img} source={logo} /> 
      </View>
       </View>
    )
  }
}

  const style = StyleSheet.create({
    container: {
      flex: 1,
    backgroundColor: "#bfe6ff",
    alignItems: 'center',
    padding: "20pax",  
  },


  container1: {
    backgroundColor: "#0000ff"

  },
  text: {
    fontFamily: "Impact",
    fontSize: 50,
    
  },
    img:{
    width: 50,
      height: 50,
  }
     });
  export default App;