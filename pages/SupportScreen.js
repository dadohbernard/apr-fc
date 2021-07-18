// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import React, { Component } from 'react';
import {ImageBackground,  Linking, Image, Button, TouchableOpacity, onclick, Text, View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';



const SupportScreen = ({navigation}) => {
 
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
    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} >
      <Text style={styles.contents}>GET SUPPORT WITH US</Text>
    </TouchableOpacity>
    <Text style={styles.contentsss}>Click Button</Text>
    <Text style={styles.contentsss}>for email us</Text>
    <TouchableOpacity style={styles.contents} onPress={() => Linking.openURL('mailto:info@myteam.rw') }>
       <Image style={styles.contents} onPress={() => Linking.openURL('mailto:info@myteam.rw') }
       source={require('../assets/icon.png')}
       style={{width: 100, height:100,

        }}
       />
       </TouchableOpacity>
    <Text style={styles.contentsss}>Call us on</Text>
    <Text style={styles.contentsss}>+250788917742</Text>
    

    </ImageBackground>
  </View>
  );
};

export default SupportScreen;
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

});
