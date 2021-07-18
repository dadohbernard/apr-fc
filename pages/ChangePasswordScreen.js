import { StatusBar } from "expo-status-bar";
import React, {useState, createRef} from 'react';
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
 
const ChangePasswordScreen = (props) => {
  const [current_password, setcurrent_password] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [new_password, setnew_password] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  
  const levelInputRef = createRef();
  const current_passwordInputRef = createRef();
  const new_passwordInputRef = createRef();
  const confirmPasswordInputRef = createRef();
  const full_nameInputRef = createRef();


  const handleSubmitButton = () => {
    setErrortext('');
  
    if (!current_password) {
      alert('Please fill new password');
      return;
    }
    if (!new_password) {
      alert('Please fill old password ');
      return;
    }
    if (!confirmPassword) {
      alert('Please fill confirmPassword');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      new_password: new_password,
      current_password: current_password,
      confirmPassword:confirmPassword,
      level: 1,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    AsyncStorage.getItem("token")
    .then((token)=>{
      fetch('https://apr.myteam.rw/sportApp/public/api/changePassword', {
         method: 'POST',
         body: formBody,
         headers: {"Authorization": "Bearer " + token,'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',}
        
        })
   
   
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if(responseJson.Message!=null ){
          setIsRegistraionSuccess(true);
          console.log('password changed Successful. Please Login to proceed');
          //setErrortext(responseJson.message);
          //console.log(responseJson.Message)
        }else if (responseJson.Message == null) {
          setErrortext('password error, wrong old password or new does not macth');
        } else {
          setErrortext('password Unsuccessful');
        }
      })
    
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
    })
  };
  if (isRegistraionSuccess) {
    return (
      <View style={styles.containerr}>
        <Image
          source={require('../assets/success.png')}
          style={{height: 150, resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Text style={styles.forgot_button}>Password Changed Successful.</Text>
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
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/loog.png")} />
     
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={(current_password) => setcurrent_password(current_password)}
              underlineColorAndroid="#f000"
              placeholder="Enter your old password"
              placeholderTextColor="#8b9cb5"
              secureTextEntry={true}
              ref={current_passwordInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                current_passwordInputRef.current && current_passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={(new_password) => setnew_password(new_password)}
              underlineColorAndroid="#f000"
              placeholder="Enter New Password"
              secureTextEntry={true}
              placeholderTextColor="#8b9cb5"
              ref={new_passwordInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                new_passwordInputRef.current && new_passwordInputRef.current.focus()
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
        <Text onPress={handleSubmitButton} style={styles.loginText}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('LoginScreen')}> 
        <Text onPress={() => navigation.navigate('LoginScreen')} style={styles.forgot_button}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ChangePasswordScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height:"100%"
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