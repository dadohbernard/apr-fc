import React, {useState, useEffect, Component} from 'react';
import { ScrollView } from 'react-native';
import {ImageBackground, AsyncStorage, Image, Button, TouchableOpacity, onclick, Text, View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';
 
  
  const WelcomeScreen = ({navigation}) => {
    const [animating, setAnimating] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setAnimating(false);
        //Check if user_id is set or not
        //If not then send for Authentication
        //else send to Home Screen
        AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(value === null ? 'IndexScreen' : 'IndexScreen'),
        );
      }, 2000);
    }, []);
  return (
    <ScrollView style={styles.containerr}>
    <View style={styles.container}>

 
  <Image
        source={require('../assets/loog.png')}
        style={{width: '60%', resizeMode: 'contain', margin: 40}}
      />
  <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('IndexScreen')}>
      <Text onPress={() => navigation.navigate('IndexScreen')} style={styles.loginText}>GET STARTED</Text>
    </TouchableOpacity>
    <TouchableOpacity >
      <Text style={styles.loginTextt}>Represented by</Text>
    </TouchableOpacity>
    <Image
        source={require('../assets/azam.png')}
        style={{width: '20%', borderRadius:20, resizeMode: 'contain', marginTop: 10}}
      />
    </View>
    </ScrollView>

);
}
export default WelcomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color:'#0f0943',
    alignItems: "center",
    justifyContent: "center",
    alignContent:"center",
    textAlign:"center",
  },
  containerr: {
    backgroundColor: '#fff',
  },
  loginText:{
color:"#fff",
fontSize:18,
fontWeight:"bold",
  },
  loginTextt:{
    color:"#000",
    fontSize:12,
    fontWeight:"bold",
    marginTop:20,
      },
  contents: {
    alignItems: "center",
    alignContent:"center",
    textAlign:"center",
    fontFamily:'serif',
    fontSize:24,
    fontWeight:"bold",
    marginTop:0,
    marginBottom:10,
    color:'#000',
  },
  loginBtn: {
    
    width: "60%",
    borderRadius: 35,
    height: 40,
    fontSize:26,
    alignItems: "center",
    alignContent:"center",
    textAlign:"center",
    justifyContent: "center",
    marginTop: 40,
    color:"#fff",
    backgroundColor: "#000",
  },
});
