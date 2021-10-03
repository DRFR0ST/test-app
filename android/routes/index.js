import React, {useState} from 'react';
import {RegisterPage} from '../screens/auth/RegisterPage';
import {LoginPage} from '../screens/auth/LoginPage';

import {createStackNavigator} from '@react-navigation/stack';
const MainStack = createStackNavigator();

export const useRoute = isAuth => {
  // if (!isAuth) {
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
      {/* <MainStack.Screen
          name="Home"
          component={Home}
          options={{ title: "Start screen" }}
        /> */}
    </MainStack.Navigator>
  );
  // }
};
