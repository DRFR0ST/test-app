import 'react-native-gesture-handler';
import React from 'react';

import {LogBox} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
// import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {Provider} from 'react-redux';
// import {HomeScreen} from './components/HomeScreen/HomeScreen';

import {store} from './redux/store';
import {Routes} from './routes/Routes';
// the place for redux

export const App: () => React.ReactElement = () => {
  LogBox.ignoreLogs(['EventEmitter']); // temporary fix

  return (
    // the place for redux
    // <StoreProvider store={store}>
    <Provider store={store}>
      <PaperProvider
        settings={{
          icon: props => <EntypoIcon {...props} />,
        }}>
        <NavigationContainer>
          <Routes />
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
