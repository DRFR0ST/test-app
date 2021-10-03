import 'react-native-gesture-handler';
import React from 'react';

import {LogBox} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';

import {Provider} from 'react-redux';
// import {HomeScreen} from './components/HomeScreen/HomeScreen';
// import {ProfileScreen} from './components/ProfileScreen/ProfileScreen';
// import {ThreeDotsScreen} from './components/ProfileScreen/ThreeDotsScreen';
import {useRoute} from './android/routes';
import {store} from './android/redux/store';
// the place for redux
// import { Provider as StoreProvider } from 'react-redux';

// const Drawer = createDrawerNavigator();

export const App: () => React.ReactElement = () => {
  const routing = useRoute(false);
  LogBox.ignoreLogs(['EventEmitter']); // temporary fix

  return (
    // the place for redux
    // <StoreProvider store={store}>
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          {routing}
          {/* <Drawer.Navigator initialRouteName="Main offers">
          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerRight: () => <ThreeDotsScreen />,
            }}
          />
          <Drawer.Screen name="Main offers" component={HomeScreen} />
        </Drawer.Navigator> */}
        </NavigationContainer>
      </PaperProvider>
      {/* // </StoreProvider> */}
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'pink',
//   },
// });
