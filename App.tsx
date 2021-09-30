import 'react-native-gesture-handler';
import React from 'react';
// import {Button} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import {HomeScreen} from './components/HomeScreen/HomeScreen';
import {ProfileScreen} from './components/ProfileScreen/ProfileScreen';
// the place for redux
// import { Provider as StoreProvider } from 'react-redux';

const Drawer = createDrawerNavigator();

export const App: () => React.ReactElement = () => {
  return (
    // the place for redux
    // <StoreProvider store={store}>
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Main offers">
          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerRight: () => (
                <Icon
                  name="rocket"
                  size={30}
                  color="#4F8EF7"
                  onPress={() => console.log('This is a button!')}
                />
              ),
            }}
          />
          <Drawer.Screen name="Main offers" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
    // </StoreProvider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'pink',
//   },
// });
