import 'react-native-gesture-handler';
import React from 'react';

import {LogBox} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
// import {HomeScreen} from './components/HomeScreen/HomeScreen';

import {useRoute} from './routes';
import {store} from './redux/store';
// the place for redux

export const App: () => React.ReactElement = () => {
  const routing = useRoute(false);
  LogBox.ignoreLogs(['EventEmitter']); // temporary fix

  return (
    // the place for redux
    // <StoreProvider store={store}>
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>{routing}</NavigationContainer>
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
