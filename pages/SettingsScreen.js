// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import React, { Component } from 'react';
import {ImageBackground, Image, Button, TouchableOpacity, onclick, Text, View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';



const SettingsScreen = ({navigation}) => {
 
  return (
    <View style={styles.container}>

  <ImageBackground 
           source={require('../assets/foot.jpg')}
          style={{ flex: 1,
            width: 360,
            height: null,
            }}
        >
    {/* <Dashboard data={data} background={true} card={card} column={2} /> */}
    <TouchableOpacity >
      <Text style={styles.contents}>SETTING</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.contentsss}>Change password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.contentsss}>Update Profile</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
  );
};

export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    color:'#0f0943',
    alignContent:"center",
    textAlign:"center",
  },
  contents: {
    alignItems: "center",
    alignContent:"center",
    textAlign:"center",
    fontFamily:'serif',
    fontSize:24,
    marginTop:60,
    marginBottom:90,
    color:'#fff',
  },
  contentss: {
    alignItems: "center",
    alignContent:"center",
    textAlign:"center",
    fontFamily:'serif',
    fontSize:30,
    color:'#000',
  },
  contentsss: {
    alignItems: "center",
    alignContent:"center",
    textAlign:"center",
    fontFamily:'serif',
    fontSize:16,
    marginTop:10,
    color:'#000',
  },
  loginBtn: {
    width: "100%",
    borderRadius: 5,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#c4c4c4",
  },

});
