import React from 'react';
import {Pressable, Text} from 'react-native';
import {useAppNavigation} from '../../routes/Routes';

export const HomeScreen: () => React.ReactElement = () => {
  const navigation = useAppNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <Text>d</Text>

      <Pressable onPress={navigateBack}>
        <Text>Go back</Text>
      </Pressable>
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'pink',
//   },
// });
