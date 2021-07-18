
import Dashboard from 'react-native-dashboard';
import { Card } from 'react-native-elements';
import * as React from 'react';
import react, {useState, useEffect} from 'react';
import {
  TouchableOpacity,Text,
  StyleSheet,
  SafeAreaView,ImageBackground,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import Loader from './Loader';
import { View } from 'react-native';
import { ScrollView } from 'react-native';
const movieURL='https://www.apr.myteam.rw/sportApp/public/api/viewPost';
const movieURLL='https://www.apr.myteam.rw/sportApp/public/api/singleHome';

// const movieURL='https://www.apr.myteam.rw/sportApp/public/api/allSample';
// const movieURLL='https://www.apr.myteam.rw/sportApp/public/api/singleSample';

const HomeScreen = ({navigation}) => {
const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);
const [dataa, setDataa] = useState([]);
const width_proportion = '100%';
const height_proportion = '100%';
useEffect(() =>{
  fetch(movieURL, {
     method: 'GET'
    })
  .then((response) => response.json())
  .then((json) => setData(json.Data))
  .catch((error) => alert("server not found try again rate"))
  .finally(() => setLoading(false))
  },[])
  useEffect(() =>{
    fetch(movieURLL, {
       method: 'POST'
      })
    .then((response) => response.json())
    .then((json) => setDataa(json.Data))
    .catch((error) => alert("server not found try again rate"))
    .finally(() => setLoading(false))
    },[])
return (
  <SafeAreaView  style={styles.container}>

    {isLoading ? (
  <Loader isLoading={isLoading} />
    ):(
      <FlatList style={{height:'100%', marginTop:1}}
      data={dataa}
      keyExtractor={({id}, index) => id }
      renderItem={({item})=> (
        <View style={{ backgroundColor: 'black',width:'100%',height:250, margin:0, padding:0,borderRadius:0, overflow: "hidden" }}>

          <Video style={styles.videos}
  source={{ uri: `https://www.apr.myteam.rw/sportApp/${item.image}`
   }}
  resizeMode="contain"
  style={{ width: width_proportion, height: 200 }}
  useNativeControls
  
  />
  
          <Text style={styles.paragraph5}>
      
           {item.titles}
          
          </Text>
       
        </View>
        )}
        />
    )}
    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('IndexScreen')}>
      <Text onPress={() => navigation.navigate('IndexScreen')} style={styles.loginText}>ALL LATEST VIDEOS</Text>
    </TouchableOpacity>
{isLoading ? (
 <Loader isLoading={isLoading} />
    ):(
      
      <FlatList horizontal={true} style={{height:'100%'}}
      data={data}
      keyExtractor={({id}, index) => id }
      renderItem={({item})=> (
        <View style={{  flex:1, justifyContent: "center" }}>
        <View style={{ backgroundColor: "black",flexGrow: 1, height:255,width:180, margin:1, padding:1,borderRadius:3,}}>
          <View>
          <Video style={{backgroundColor:'blue'}}
      onPress={() => navigation.navigate('LoginScreen')}
  source={{ uri: `https://apr.myteam.rw/sportApp/${item.image}`
   }}
  resizeMode="contain"
  style={{ width: '100%', height: 155 }}
  useNativeControls
/>
<Text style={styles.paragraph1}>
      
           {item.titles}
          
          </Text>
          </View>       
          </View>
          </View>
        )}
        
        />
        
    )}
      </SafeAreaView>
);
      };
const styles = StyleSheet.create({

  contentContainer: {
    backgroundColor:'grey',
  },
  cards:{
    width:'50%',

  },

  Container: {
    backgroundColor:'grey',
    width:'100%',
    height:'100%'
  },
  cont: {
   marginTop:0,
  },
  paragraph: {
    margin: 14,
    fontSize: 18,
    color:'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
  loginText:{
    color:"#fff",
    fontSize:14,
    fontWeight:"bold",
    alignContent:'center',
    textAlign:'center',
    justifyContent:'center'
      },
  paragraph1: {
    margin: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  paragraph5: {
    margin: 3,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  paragraph2: {
    margin: 5,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    padding: 0,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    padding: 10,
    marginVertical: 10,
  },
  loginBtn: {
    
    width: "100%",
    borderRadius: 0,
    marginTop:-20,
    height: 50,
    alignItems: "center",
    alignContent:"center",
    textAlign:"center",
    justifyContent: "center",
    color:"#fff",
    backgroundColor: "grey",
  },
});
export default HomeScreen;
