import { StatusBar } from "expo-status-bar";
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
const RegisterScreen = (props) => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [level, setlevel] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [phone, setphone] = useState('');
  const [full_name, setfull_name] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  
  const usernameInputRef = createRef();
  const emailInputRef = createRef();
  const levelInputRef = createRef();
  const passwordInputRef = createRef();
  const phoneInputRef = createRef();
  const confirmPasswordInputRef = createRef();
  const full_nameInputRef = createRef();


  const handleSubmitButton = () => {
    setErrortext('');
    if (!username) {
      alert('Please fill User Name');
      return;
    }
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill password');
      return;
    }
    if (!phone) {
      alert('Please fill Phone number');
      return;
    }
    if (!phone) {
      alert('Please fill full name');
      return;
    }
    if (!confirmPassword) {
      alert('Please fill confirmPassword');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      username: username,
      email: email,
      password: password,
      phone: phone,
      confirmPassword:confirmPassword,
      full_name: full_name,
      level: 1,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://apr.myteam.rw/sportApp/public/api/signup', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if(responseJson.Message!=null ){
          setIsRegistraionSuccess(true);
          console.log('Registration Successful. Please Login to proceed');
          //setErrortext(responseJson.message);
          //console.log(responseJson.Message)
        }else if (responseJson.Message == null) {
          setErrortext('Registration error username or email already exist');
        } else {
          setErrortext('Registration Unsuccessful');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View style={styles.containerr}>
        <Image
          source={require('../assets/success.png')}
          style={{height: 150, resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Text style={styles.forgot_button}>Registration Successful.</Text>
        <TouchableOpacity
          style={styles.loginBtn}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.loginText}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
 

  return (
    <ScrollView style={styles.containerrr}>
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/loog.png")} />
     
      
      <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={(username) => setusername(username)}
              underlineColorAndroid="#f000"
              placeholder="username"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                usernameInputRef.current && usernameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={(full_name) => setfull_name(full_name)}
              underlineColorAndroid="#f000"
              placeholder="Full name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                full_nameInputRef.current && full_nameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={(email) => setemail(email)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={(phone) => setphone(phone)}
              underlineColorAndroid="#f000"
              placeholder="Enter Phone Number"
              placeholderTextColor="#8b9cb5"
              ref={phoneInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                phoneInputRef.current && phoneInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={(password) => setpassword(password)}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              secureTextEntry={true}
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={(confirmPassword) => setconfirmPassword(confirmPassword)}
              underlineColorAndroid="#f000"
              placeholder="Confirm password"
              secureTextEntry={true}
              placeholderTextColor="#8b9cb5"
              ref={confirmPasswordInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                confirmPasswordInputRef.current && confirmPasswordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>


      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmitButton}>
        <Text onPress={handleSubmitButton} style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity> 
        <Text style={styles.forgot_button}></Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}
export default RegisterScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height:"100%"
  },
  containerrr: {
    backgroundColor: "#fff",
    
  },
  containerr: {
    backgroundColor: "#fff",
    alignItems: "center",
    height:"100%",
    justifyContent:'center'
  },
 
  image: {
    marginTop: 40,
    marginBottom: 20,
    height:150,
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