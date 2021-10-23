import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View, Text} from 'react-native';

export const HairColor = () => {
  return (
    <View style={styles.container}>
      <Text>Hair color: </Text>
      <RNPickerSelect
        onValueChange={value => console.log(value)}
        useNativeAndroidPickerStyle={false}
        placeholder={{
          label: 'Select hair color...',
          value: 'brown',
          color: '#c7c7cd',
        }}
        items={[
          {label: 'blonde', value: 'blonde'},
          {label: 'brown (brunette)', value: 'brown (brunette)'},
          {label: 'very dark brown', value: 'very dark brown'},
          {label: 'black', value: 'black'},
          {label: 'red', value: 'red'},
          {label: 'other', value: 'other'},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
});
