import React, {useState} from 'react';
import {RegisterPage} from '../components/auth/RegisterPage';
import {LoginPage} from '../components/auth/LoginPage';
import {Questionnaire} from '../components/additionalScreen/Questionnaire';
import {HomeScreen} from '../components/mainScreens/HomeScreen';
import {ProfileScreen} from '../components/mainScreens/ProfileScreen';
import {ThreeDotsScreen} from '../components/mainScreens/ThreeDotsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as StoreProvider} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';

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
