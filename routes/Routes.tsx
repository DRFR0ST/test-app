/** Deps scope imports */
import React, {useRef} from 'react';
import {IconButton} from 'react-native-paper';

import {useNavigation} from '@react-navigation/core';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

/** Project scope imports */
import {RegisterPage} from '../screens/auth/RegisterPage';
import {LoginPage} from '../screens/auth/LoginPage';
import {Questionnaire} from '../screens/additionalScreen/Questionnaire';
import {HomeScreen} from '../screens/mainScreens/HomeScreen';
import {ProfileScreen} from '../screens/mainScreens/ProfileScreen';
import {ThreeDotsScreen} from '../screens/mainScreens/ThreeDotsScreen';

/** Directory scope imports */
import {uuidv4} from './uuidv4';

/**
 * Component that returns the core routing of the app.
 */
export const Routes = () => {
  const navigation = useAppNavigation();
  const isAuth = false; // TODO: Replace with auth data from redux (useSelector).

  // Default stack navigator options.
  const stackNavOptions = getNavigationOptions({navigation});

  // The restricted drawer navigator that is used when the user is logged in.
  if (isAuth) {
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
  }

  // The main stack, showed if the screen is not authenticated.
  return (
    <MainStack.Navigator initialRouteName="RegistrationScreen">
      <MainStack.Screen
        options={stackNavOptions({headerShown: false})}
        name="Registration"
        component={RegisterPage}
      />
      <MainStack.Screen
        options={stackNavOptions({headerShown: false})}
        name="Login"
        component={LoginPage}
      />
      <MainStack.Screen
        options={stackNavOptions({headerShown: false})}
        name="Questionnaire"
        component={Questionnaire}
      />
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={stackNavOptions({title: 'Start screen'})}
      />
    </MainStack.Navigator>
  );
};

/**
 * Hook to access the navigation prop of the parent screen anywhere.
 * Wrapper for useNavigation() from "@react-navigation", use it instead.
 */
export const useAppNavigation = () => {
  type State = {
    /**
     * Function to navigate to a new screen.
     * @param routeName The name of the screen to navigate to.
     * @param params The params to pass to the screen.
     */
    navigate: (name: string, params?: any) => void;
    /**
     * Function to go back to the previous screen.
     */
    goBack: () => void;
    /**
     * The object returned by useNavigation from "@react-navigation".
     */
    _navigation: typeof navigation;
  };

  const navigation = useNavigation();
  const stateRef = useRef(null as unknown as State);

  if (stateRef.current === null) {
    /**
     * This is the function that solves the freezing navigator problem.
     * The navigator seems to freeze when a screen is mounted that is already in the stack.
     * Providing a key like below fixes this.
     */
    const navigate = (name: string, params?: any) => {
      const key = uuidv4();

      // @ts-ignore
      navigation.navigate({key, name, params});

      /*
        Debugging is important!
        It solved all the problems because there is no solution for the problem you know nothing about.
                                                                                                    -- #DR
      */
      navLogger(key, name, params);
    };

    /** Navigate to the previous screen. */
    const goBack = () => {
      const state = navigation.getState();
      const lastRoute = state.routes[state.routes.length - 2];

      if (lastRoute) {
        navigate(lastRoute.name, lastRoute.params);
      } else {
        console.warn('Cannot go back. Navigation stack is empty.');
      }
    };

    // Initialize the state.
    stateRef.current = {
      navigate,
      goBack,
      _navigation: navigation,
    };
  }
  stateRef.current._navigation = navigation;

  return stateRef.current;
};

// The Stack and Drawer navigators used in authorized and unauthorized stacks.
const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();

/** Creates default navigation options and merges additional options. */
const getNavigationOptions =
  ({navigation}: {navigation: ReturnType<typeof useAppNavigation>}) =>
  (options: StackNavigationOptions = {}): StackNavigationOptions => ({
    // headerLeft returns an replacement for the default back button to fix the freezing when going back.
    headerLeft: () => (
      // Notice that the IconButtons is now used instead of the default back button provided by react-navigation. It may have some styling issues.
      <IconButton
        icon="arrow-left"
        // Probably needs some visual adjustments.. Sorry :/
        // style={{marginVertical: 'auto'}}
        onPress={() => {
          navigation.goBack();
        }}
      />
    ),
    ...options,
  });

/**
 * Logs the navigation to the console.
 * @param key Screen key.
 * @param name Screen name.
 * @param params Screen params.
 */
const navLogger = (key: string, name: string, params?: any) => {
  // Some cool debugging
  console.group('🚗 Navigation');

  console.log('Direction', '=>', name);
  console.log('Parameters', '=>', params);
  console.log('Key', '=>', key);

  console.groupEnd();
};
