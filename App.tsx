import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
// import {
//   StyleSheet,
//   // Text,
// } from 'react-native';
import {useRoute} from './android/routes';
import {store} from './android/redux/store';

const App: () => React.ReactElement = () => {
  const routing = useRoute(false);
  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
    // <View style={styles.screen}>
    //   <LoginPage />
    // </View>
  );
};

export default App;
