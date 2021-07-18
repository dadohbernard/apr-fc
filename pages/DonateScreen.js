import React, { Component } from 'react';
import {TextInput,ScrollView, ImageBackground, Image, Button, TouchableOpacity, onclick, Text, View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';
 
  
  const DonateScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.containerr}>
    <View style={styles.container}>

  {/* <Dashboard data={data} background={true} card={card} column={2} /> */}
  <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} >
    <Text style={styles.contents}>PAYMENT OPTION</Text>
  </TouchableOpacity>
  <Image
        source={require('../assets/ma.png')}
        style={{width: '100%', height:60, resizeMode: 'contain', marginBottom: 20}}
      />
      <Image
        source={require('../assets/m.jpg')}
        style={{width: '100%',height:60,  resizeMode: 'contain', marginBottom: 20}}
      />
            <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your full names"
          placeholderTextColor="#003f5c"
          autoCapitalize="words"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="AMOUNT"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your Message"
          placeholderTextColor="#003f5c"
          multiline = {true}
numberOfLines = {4}
        />
      </View>
  <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('IndexScreen')}>
      <Text onPress={() => navigation.navigate('IndexScreen')} style={styles.loginText}>Process Payment</Text>
    </TouchableOpacity>
</View>
</ScrollView>
);
}
export default DonateScreen;
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
fontSize:22,
fontWeight:"bold",
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
    
    width: "80%",
    borderRadius: 15,
    height: 50,
    fontSize:26,
    alignItems: "center",
    alignContent:"center",
    textAlign:"center",
    justifyContent: "center",
    marginTop: 40,
    color:"#fff",
    backgroundColor: "#000",
    marginBottom:20
  },
  inputView: {
    backgroundColor: "#d9d9d9",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});
