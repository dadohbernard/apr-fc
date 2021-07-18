import { StatusBar } from "expo-status-bar";
import React, {useState, createRef} from 'react';
import { ScrollView } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
 
  
  const LoginScreen = ({navigation}) => {

  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!login) {
      alert('Please fill Email');
      console.log("Please fill Email")
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    let dataToSend = {login: login, password: password};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://apr.myteam.rw/sportApp/public/api/login', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        // If server response message same as Data Matched
        if(responseJson.Message!=null ){
          setErrortext(responseJson.Message);
          console.log(responseJson.Message)
          alert(responseJson.Message)
        }
        else if (responseJson[0].level == 1) {
          // alert("Welcome")
          AsyncStorage.setItem('token', responseJson[0].token)
          AsyncStorage.setItem('username', responseJson[0].username)
          AsyncStorage.setItem('email', responseJson[0].email)
          AsyncStorage.setItem('id', responseJson[0].id.toString())
          console.log(responseJson[0].email)
         // console.log(responseJson[0].username)
         // console.log(responseJson[0].id)
         //console.log(responseJson[0].level)
          navigation.navigate('HomeScreenStack')

        } else{
          setErrortext('Please check your email id or password');
          console.log('Please check your email id or password');
          alert('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        //console.error(error);
      });
  };

  return (
    <ScrollView style={styles.containerr}>
    <View style={styles.container}>
     
      <Image style={styles.image} source={require("../assets/loog.png")} />
     
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username."
          placeholderTextColor="#003f5c"
          autoCapitalize="words"
          onChangeText={(login) => setlogin(login)}
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          ref={passwordInputRef}
          onChangeText={(password) => setpassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmitPress}>
        <Text onPress={handleSubmitPress} style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('RegisterScreen')}> 
        <Text onPress={() => navigation.navigate('RegisterScreen')} style={styles.forgot_button}>New here? Sign Up</Text>
      </TouchableOpacity>
      
    </View>
    </ScrollView>
  );
}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height:"100%",
    justifyContent:'center',
    textAlign:'center'
  },
  containerr: {
    backgroundColor: "#fff",
  },
 
  image: {
    marginTop: 40,
    marginBottom: 40,
    height:200,
    resizeMode: 'contain',
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
  loginText:{
    color:"#fff",
    fontSize:22,
    fontWeight:"bold",
      },
  forgot_button: {
    height: 30,
    color:'#000',
    marginTop: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#000",
  },
});