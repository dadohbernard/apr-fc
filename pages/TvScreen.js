import ReadMore from '@fawazahmed/react-native-read-more';
import { Card } from 'react-native-elements';
import * as React from 'react';
import react, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView, ScrollView,Image, ActivityIndicator,ImageBackground,
} from 'react-native';
import { AsyncStorage } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Loader from './Loader';
const movieURL='https://apr.myteam.rw/sportApp/public/api/viewNews';
const TvScreen = ({navigation}) => {

// AsyncStorage.getItem("email")
// .then((email)=>{
// console.log(email)
// })
// AsyncStorage.getItem("token")
// .then((token)=>{
// console.log(token)
// })
// AsyncStorage.getItem("username")
// .then((username)=>{
// console.log(username)
// })
AsyncStorage.getItem('id')
.then((id)=>{
console.log(id)
})


const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);
const width_proportion = '100%';
const height_proportion = '100%';
useEffect(() =>{
  fetch(movieURL, {
     method: 'GET'
    })
  .then((response) => response.json())
  .then((json) => setData(json.Data))
  .catch((error) => alert(error))
  .finally(() => setLoading(false))
  },[])

return (


  <SafeAreaView style={styles.container}>
    {isLoading ? (
  <Loader isLoading={isLoading} />
    ):(
      <FlatList
      data={data}
      keyExtractor={({id}, index) => id }
      renderItem={({item})=> (
       
        
        <Card title ={item.titles} style={styles.cards}>
       
         
        <Image 
        style={{ width: width_proportion, height: 200 }}
        source={{uri: `https://apr.myteam.rw/sportApp/${item.image}`}}
      />
      
       <ReadMore
              numberOfLines={3}>
    {item.description}
    </ReadMore>
   <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
          <Text style={styles.paragraph2}>Date: {item.created_at} </Text>
          <Text style={styles.paragraph2}>Posted By: {item.posted_by} </Text>
          </View>
      </Card>
          
        )}
        />
    )}
      </SafeAreaView>
);
      };
const styles = StyleSheet.create({

  cards:{
  fontSize:8,
  fontWeight:'bold',

  },
  contentContainer: {
    paddingVertical: 0,
    backgroundColor:'#f1f1f1',
  },
  paragraph: {
    margin: 14,
    fontSize: 18,
    color:'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph1: {
    margin: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
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
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 0,
  },
  textStyle: {
    fontSize: 14,
    color: 'black',
    backgroundColor: '#f9f9f9',
    padding:10
  },
  textStylee: {
    fontSize: 28,
    color: '#000',
    backgroundColor: '#f9f9f9',
    padding:10
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    padding: 10,
    marginVertical: 10,
  },
 
});
export default TvScreen;