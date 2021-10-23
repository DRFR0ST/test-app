import React, {useState} from 'react';
import {RegisterPage} from '../screens/auth/RegisterPage';
import {LoginPage} from '../screens/auth/LoginPage';
import {Questionnaire} from '../screens/additionalScreen/Questionnaire';
import {AboutMe} from '../screens/additionalScreen/AboutMe';
import {HomeScreen} from '../screens/mainScreens/HomeScreen';
import {ProfileScreen} from '../screens/mainScreens/ProfileScreen';
import {ThreeDotsScreen} from '../screens/mainScreens/ThreeDotsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as StoreProvider} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';

/** ! Don't mix up .js files with .ts(x) files. Keep it consistent please. */

const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="RegistrationScreen">
        <MainStack.Screen
          options={{headerShown: false}}
          name="Registration"
          component={RegisterPage}
        />
        <MainStack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginPage}
        />
        <MainStack.Screen
          options={{headerShown: false}}
          name="Questionnaire"
          component={Questionnaire}
        />
        <MainStack.Screen
          options={{headerShown: false}}
          name="AboutMe"
          component={AboutMe}
        />
        <MainStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Start screen'}}
        />
      </MainStack.Navigator>
    );
  }
  return (
    <Drawer.Navigator initialRouteName="Main offers">
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerRight: () => <ThreeDotsScreen />,
        }}
      />
      <Drawer.Screen name="Main offers" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
