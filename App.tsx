import React,{Component} from 'react';
import { View, PixelRatio, ImageBackground } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { Image } from 'react-native';
import exampleJson from './example.json'

export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>  
        <ImageBackground
          source={require('./images/logo.jpg')}
          style={{  
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.PicArea} >
            <Image source={require('./images/example.jpg')}  
            style={{ width: 200, height: 200, marginTop:15, alignSelf:"center", borderRadius: 400/ 2,}} 
            />
            <Text style={styles.MyName}>FAIZAN SHOUKAT ABBASI</Text>
          </View>  
      <View style={styles.Data}>
        <Text style={styles.textStyle}>Arid No   :    {exampleJson.Reg}</Text>
        <Text style={styles.textStyle}>Class       :    {exampleJson.Class}</Text>
        <Text style={styles.textStyle}>Email       :    {exampleJson.Email}</Text>
        <Text style={styles.textStyle}>Section    :    {exampleJson.Section}</Text>
      </View> 

      <View style={styles.department} >
        <Text style={styles.MyName}>UIIT</Text>
        </View>
      </ImageBackground> 
    </View>  
  );  
}}
const styles = StyleSheet.create({  
  container:{  
      flex: 1,  
      flexDirection: 'column',
      width:350,
      marginTop:100,
      alignSelf:"center", 
  }, 

  MyName:{
    alignSelf:"center",
    fontSize:25, 
    textShadowRadius:5, 
    textShadowColor:'#00FF00',
  },

  PicArea:{  
      width: '100%',  
      height: 280,  
      alignSelf:"center",
   },  
  Data:{  
      width: '95%',    
      height: 100,  
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#skyblue',
      borderStyle:"dotted",
      alignContent:"center",
      justifyContent:"center", 
  },  
  department:{  
      width: '100%',  
      borderRadius: 4, 
  },

  textStyle: {
    fontSize: 15,
    textShadowColor:'#f0f',
    textShadowRadius:3,
    alignSelf:"baseline",
    marginLeft:5, 
  },
})  