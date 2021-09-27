import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// the place for redux
// import { Provider as StoreProvider } from 'react-redux';

const Stack = createStackNavigator();

import HomeScreen from './components/HomeScreen/HomeScreen';

const App: () => React.ReactElement = () => {
  return (
    // the place for reduxF
    // <StoreProvider store={store}>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
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

export default App;
