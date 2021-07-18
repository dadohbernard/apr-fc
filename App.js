// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';
import {Button, AsyncStorage, Alert, View, Text, TouchableOpacity, Image, useWindowDimensions} from 'react-native';

import {
  NavigationContainer,useNavigation,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import WelcomeScreen from './pages/WelcomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import TvScreen from './pages/TvScreen';
import DonateScreen from './pages/DonateScreen';
import IndexScreen from './pages/IndexScreen';
import AboutScreen from './pages/AboutScreen';
import MatchScreen from './pages/MatchScreen';
import SupportScreen from './pages/SupportScreen';

import ChangePasswordScreen from './pages/ChangePasswordScreen';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();


const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
     <TouchableOpacity onPress={()=> toggleDrawer()}>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'HomeScreen':
      return 'APR FC NEWS AND VIDEO';
    case 'ExploreScreen':
      return 'APR FC NEWS AND VIDEO';
    case 'TabStack':
      return 'APR FC NEWS AND VIDEO';
  }
};

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: 'grey',
        activeBackgroundColor:'white',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#3c3c3c',
          fontSize:10,
          justifyContent:'center',
          textAlign: 'center',
          alignContent:'center',

        },
        labelStyle: {
          textAlign: 'center',
          fontSize:10,
          height:'60%',
          justifyContent:'center',
        },
        indicatorStyle: {
          borderBottomColor: '#fff',
          borderBottomWidth: 3,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'APR TV',
          /*tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
             name="home"
             color={color}
             size={size}
            />
          ),*/
        }}
      />
      <Tab.Screen
        name="TvScreen"
        component={TvScreen}
        options={{
          tabBarLabel: 'NEWS',
          /*tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
             name="home"
             color={color}
             size={size}
            />
          ),*/
        }}
      />
       <Tab.Screen
        name="DonateScreen"
        component={DonateScreen}
        options={{
          tabBarLabel: 'Donate',
          /*tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
             name="home"
             color={color}
             size={size}
            />
          ),*/
        }}
      />
       <Tab.Screen
        name="MatchScreen"
        component={MatchScreen}
        options={{
          tabBarLabel: 'Match',
          fontSize:8,
          /*tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
             name="home"
             color={color}
             size={size}
            />
          ),*/
        }}
      />
      {/* <Tab.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
             name="home"
             color={color}
             size={size}
            />
          ),
        }}
      /> */}
     
      
    </Tab.Navigator>
  );
};

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="APR FC NEWS AND VIDEO"
        component={TabStack}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#000', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
       
    </Stack.Navigator>
  );
};
const LoginScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{drawerLabel: 'log',headerShown:false}}
        />
      <Stack.Screen
         name="IndexScreen"
         component={IndexScreen}
         options={{headerShown: true,
           headerStyle: { backgroundColor: '#000' },
           headerTintColor: '#fff',
           headerRight:() =>(
             <TouchableOpacity   activeOpacity = { .5 } style={{flex:1,marginTop:15, marginRight:20}} >
             <Text onPress={() => navigation.navigate('LoginScreen')}  style={{ fontSize:20, fontWeight:'bold', color:'white',}}>lOGIN</Text>
           </TouchableOpacity>
           ),
           headerTitle:'ARP FC APP',
           headerTitleStyle: { fontWeight: 'bold' }}}
      />
       <Stack.Screen
          name="LoginScreen"
          options={{drawerLabel: 'log',headerShown:false}}
          component={LoginScreen}
        />
         <Stack.Screen
          name="RegisterScreen"
          options={{drawerLabel: 're',headerShown:true}}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="HomeScreenStack"
          options={{drawerLabel:'home',headerShown:false}}
          component={HomeScreenStack}
        />
    </Stack.Navigator>
  );
};



const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen"
        drawerContentOptions={{
          activeTintColor: 'white',activeBackgroundColor:'#5d5d5d' ,fontSize:28,fontWeight:'bold',backgroundColor:'#1c1c1c',inactiveBackgroundColor:'#3d3d3d',inactiveTintColor:'white',
          itemStyle: {marginVertical: 5,
          fontSize:28 ,fontWeight:'bold',},
          
        }}>
           
         <Stack.Screen
          name="LoginScreenStack"
          options={{drawerLabel: 'HOME',headerShown:false}}
          component={LoginScreenStack}
        />

      <Stack.Screen
 name="SupportScreenn"
 options={{drawerLabel:'SUPPORT',headerShown:true,headerStyle: { backgroundColor: '#2d2d2d',},headerTintColor: '#fff',headerTitle:'CONTACT US'}}
 component={SupportScreen}
      />
      <Stack.Screen
 name="ChangePasswordScreen"
 options={{drawerLabel:'CHANGE PASSWORD',headerShown:true,headerStyle: { backgroundColor: '#2d2d2d',},headerTintColor: '#fff',headerTitle:'CHANGE PASSWORD'}}
 component={ChangePasswordScreen}
      />
      <Stack.Screen
 name="AboutScreen"
 options={{drawerLabel:'ABOUT US',headerShown:true,headerStyle: { backgroundColor: '#2d2d2d',},headerTintColor: '#fff',headerTitle:'ABOUT APR FC'}}
 component={AboutScreen}
      />
      {/* <Stack.Screen
 name="ProfileScreen"
 options={{drawerLabel:'PROFILE',headerShown:true,headerStyle: { backgroundColor: '#2d2d2d',},headerTintColor: '#fff',headerTitle:'MY PROFILE'}}
 component={ProfileScreen}
      /> */}
        <Stack.Screen
 name="ProfileScreen"
 options={{drawerLabel:'ACCOUNT',headerShown:true,headerStyle: { backgroundColor: '#2d2d2d',},headerTintColor: '#fff',headerTitle:'MY PROFILE'}}
 component={ProfileScreen}
      />
      </Drawer.Navigator>
    </NavigationContainer>

  );
};

export default App;



// import React from 'react';

// //import all the components we are going to use
// import {SafeAreaView} from 'react-native';

// import {WebView} from 'react-native-webview';

// const App = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <WebView
//         source={{uri: 'http://192.168.1.143/parking/'}}
//         style={{marginTop: 20}}
//       />
//     </SafeAreaView>
//   );
// };

// export default App;





// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   SectionList,
//   SafeAreaView,
//   Image,
//   FlatList,
// } from 'react-native';

// const ListItem = ({ item }) => {
//   return (
//     <View style={styles.item}>
//       <Image
//         source={{
//           uri: item.uri,
//         }}
//         style={styles.itemPhoto}
//         resizeMode="cover"
//       />
//       <Text style={styles.itemText}>{item.text}</Text>
//     </View>
//   );
// };

// export default () => {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="light" />
//       <SafeAreaView style={{ flex: 1 }}>
//         <SectionList
//           contentContainerStyle={{ paddingHorizontal: 10 }}
//           stickySectionHeadersEnabled={false}
//           sections={SECTIONS}
//           renderSectionHeader={({ section }) => (
//             <>
//               <Text style={styles.sectionHeader}>{section.title}</Text>
//               {section.horizontal ? (
//                 <FlatList
//                   horizontal
//                   data={section.data}
//                   renderItem={({ item }) => <ListItem item={item} />}
//                   showsHorizontalScrollIndicator={false}
//                 />
//               ) : null}
//             </>
//           )}
//           renderItem={({ item, section }) => {
//             if (section.horizontal) {
//               return null;
//             }
//             return <ListItem item={item} />;
//           }}
//         />
//       </SafeAreaView>
//     </View>
//   );
// };

// const SECTIONS = [
//   {
//     title: 'Made for you',
//     horizontal: true,
//     data: [
//       {
//         key: '1',
//         text: 'Item text 1',
//         uri: 'https://picsum.photos/id/1/200',
//       },
//       {
//         key: '2',
//         text: 'Item text 2',
//         uri: 'https://picsum.photos/id/10/200',
//       },

//       {
//         key: '3',
//         text: 'Item text 3',
//         uri: 'https://picsum.photos/id/1002/200',
//       },
//       {
//         key: '4',
//         text: 'Item text 4',
//         uri: 'https://picsum.photos/id/1006/200',
//       },
//       {
//         key: '5',
//         text: 'Item text 5',
//         uri: 'https://picsum.photos/id/1008/200',
//       },
//     ],
//   },
//   {
//     title: 'Punk and hardcore',
//     data: [
//       {
//         key: '1',
//         text: 'Item text 1',
//         uri: 'https://picsum.photos/id/1011/200',
//       },
//       {
//         key: '2',
//         text: 'Item text 2',
//         uri: 'https://picsum.photos/id/1012/200',
//       },

//       {
//         key: '3',
//         text: 'Item text 3',
//         uri: 'https://picsum.photos/id/1013/200',
//       },
//       {
//         key: '4',
//         text: 'Item text 4',
//         uri: 'https://picsum.photos/id/1015/200',
//       },
//       {
//         key: '5',
//         text: 'Item text 5',
//         uri: 'https://picsum.photos/id/1016/200',
//       },
//     ],
//   },
//   {
//     title: 'Based on your recent listening',
//     data: [
//       {
//         key: '1',
//         text: 'Item text 1',
//         uri: 'https://picsum.photos/id/1020/200',
//       },
//       {
//         key: '2',
//         text: 'Item text 2',
//         uri: 'https://picsum.photos/id/1024/200',
//       },

//       {
//         key: '3',
//         text: 'Item text 3',
//         uri: 'https://picsum.photos/id/1027/200',
//       },
//       {
//         key: '4',
//         text: 'Item text 4',
//         uri: 'https://picsum.photos/id/1035/200',
//       },
//       {
//         key: '5',
//         text: 'Item text 5',
//         uri: 'https://picsum.photos/id/1038/200',
//       },
//     ],
//   },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#121212',
//   },
//   sectionHeader: {
//     fontWeight: '800',
//     fontSize: 18,
//     color: '#f4f4f4',
//     marginTop: 20,
//     marginBottom: 5,
//   },
//   item: {
//     margin: 10,
//   },
//   itemPhoto: {
//     width: 200,
//     height: 200,
//   },
//   itemText: {
//     color: 'rgba(255, 255, 255, 0.5)',
//     marginTop: 5,
//   },
// });