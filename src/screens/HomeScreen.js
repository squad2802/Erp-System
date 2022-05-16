import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {SafeAreaView, ImageBackground, StyleSheet, View} from 'react-native';
import {Avatar, Title, Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React from 'react';
import UserProfile from './UserProfile';
import MainUserDash from './MainUserDash';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';

const drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require('../assets/thenos.webp')}
          style={styles.imageBackground}>
          <View>
            <Avatar.Image
              source={require('../assets/test.jpeg')}
              size={60}
              style={styles.image}
            />
            <View>
              <Title style={styles.titleHeading}>Pradeep yaduvanshi</Title>
              <View style={{flexDirection: 'row', marginLeft: '2%'}}>
                <Ionicons name="logo-slack" size={15} style={styles.ions} />
                <Text style={styles.testHeading}>
                  Pradeep@squadmindsinc.com
                </Text>
              </View>
              <Text style={{marginLeft: 25, fontWeight: 'bold'}}>
                Android Mobile Developer
              </Text>
            </View>
          </View>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

// second component
export default function HomeScreen() {
  return (
    <drawer.Navigator
      initialRouteName="UserDashBoard"
      drawerContent={props => <CustomDrawer {...props} />}>
      <drawer.Screen
        name="UserDashBoard"
        component={MainUserDash}
        options={{
          headerShown: true,
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="home"
              size={20}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />
      <drawer.Screen
        name="Projects"
        component={ComponentOne}
        options={{
          headerShown: true,
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="podium"
              size={20}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />
      <drawer.Screen
        name="Leave Table"
        component={ComponentTwo}
        options={{
          headerShown: true,
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="today"
              size={20}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />
      <drawer.Screen
        name="Profile"
        component={UserProfile}
        options={{
          headerShown: true,
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="person"
              size={20}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />

      <drawer.Screen
        name="Calendar"
        component={ComponentThree}
        options={{
          headerShown: true,
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="calendar"
              size={20}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />
      <drawer.Screen
        name="Logout"
        component={ComponentFour}
        options={{
          headerShown: true,
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="log-out"
              size={20}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />
    </drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 60,
    marginLeft: 20,
  },
  imageBackground: {
    width: '100%',
    height: 200,
  },
  testHeading: {
    color: 'blue',
    fontWeight: 'bold',
    marginLeft: 7,
  },
  titleHeading: {
    color: 'white',
    fontWeight: '900',
    marginLeft: 7,
  },
  ions: {},
});
