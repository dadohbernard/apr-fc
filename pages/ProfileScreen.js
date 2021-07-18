// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import { Card } from 'react-native-elements';
import * as React from 'react';
import react, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,Alert,Image,AsyncStorage
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
const movieURL='https://apr.myteam.rw/sportApp/public/api/clientProfile';

const ProfileScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  AsyncStorage.getItem("token")
  .then((token)=>{
    fetch(movieURL, {
       method: 'GET',
       headers: {"Authorization": "Bearer " + token}
      
      })
    
    .then((response) => response.json())
    .then((json) => setData(json.Data))
    //.catch((error) => alert(error))
    
    })
    return (

      <View style={styles.container}>

 
        <FlatList
        data={data}
        keyExtractor={({id}, index) => id }
        renderItem={({item})=> (

          <View>
            <View style={styles.header}></View>
            <Image style={styles.avatar} 
          source={{uri: `https://apr.myteam.rw/sportApp/${item.image}`}}/>
          <View style={styles.body}>
         <View style={styles.bodyContent}>
       
         <Text style={styles.name}>{item.full_name}</Text>
         <Text style={styles.description}>{item.email}</Text>
              <Text style={styles.description}>{item.phone}</Text>


              <Text></Text>
              <Card title={'payment progress'}>
              <Text style={styles.namee}>Payment Period: {item.category_name}</Text>
              <Text style={styles.namee}>Amount: {item.amount}</Text>
              <Text style={styles.namee}>Payment method: {item.type_pay}</Text>
              <Text style={styles.description}>Date: {item.created_at}</Text>
              </Card>

              
              {/* <TouchableOpacity style={styles.buttonContainer}>
              <Text style={{color: '#fff', fontSize: 22}}>Update Profile</Text>
              </TouchableOpacity>  */}

              <TouchableOpacity style={styles.buttonContainer}
              
            onPress={() => {
              Alert.alert(
                'Logout',
                'Are you sure? You want to logout?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => {
                      return null;
                    },
                  },
                  {
                    text: 'Confirm',
                    onPress: () => {
                      AsyncStorage.clear();
                      navigation.navigate('WelcomeScreen')
                    },
                  },
                ],
                {cancelable: false},
              );
            }}>

      <Text style={{color: '#fff', fontSize: 18}}>Logout</Text>

              </TouchableOpacity>            
           
              
        </View>
          </View>
          </View>



         )}
         />
 
      </View>
    );
  }


export default ProfileScreen;

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#000",
    height:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
 
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  namee:{
    fontSize:20,
    color: "#696969",
    fontWeight: "bold"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    marginTop:30,
    borderRadius:30,
    backgroundColor: "#000",
  },
});