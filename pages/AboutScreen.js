// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import React, { Component } from 'react';
import {ImageBackground, Image, ScrollView, Button, TouchableOpacity, onclick, Text, View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';



const AboutScreen = ({navigation}) => {
 
  return (
    <ScrollView style={styles.containerr}>
    <View style={styles.container}>

  <ImageBackground 
           source={require('../assets/foot.jpg')}
          style={{ flex: 1,
            width: '100%',
            height: "100%",
            }}
        >
    {/* <Dashboard data={data} background={true} card={card} column={2} /> */}
    <TouchableOpacity  >
      <Text style={styles.contents}>ABOUT APP</Text>
    </TouchableOpacity>
    <Text style={styles.contentsss}>App information</Text>
    <Text style={styles.contentsss}>App address</Text>
    <Text style={styles.contentsss}>App developer</Text>
    <Text style={styles.contentsss}>App Policies</Text>
    <Text style={styles.contentssss}>App Terms and Conditions</Text>

    </ImageBackground>
  </View>
  </ScrollView>
  );
};

export default AboutScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    color:'#0f0943',
    alignItems: "center",
    justifyContent: "center",
    alignContent:"center",
    textAlign:"center",
  },
  container: {
    backgroundColor: '#ecf0f1',
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
    fontSize:40,
    marginTop:90,
    color:'#fff',
  },
  contentsss: {
    alignItems: "center",
    alignContent:"center",
    textAlign:"center",
    fontFamily:'serif',
    fontSize:16,
    marginTop:10,
    color:'#fff',
  },
  contentssss: {
    alignItems: "center",
    alignContent:"center",
    textAlign:"center",
    fontFamily:'serif',
    fontSize:16,
    marginTop:10,
marginBottom:400,
    color:'#fff',
  },

});
