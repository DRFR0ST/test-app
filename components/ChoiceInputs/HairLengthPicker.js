import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View, Text} from 'react-native';

export const HairLength = () => {
  return (
    <View style={styles.container}>
      <Text>Hair length: </Text>
      <RNPickerSelect
        onValueChange={value => console.log(value)}
        useNativeAndroidPickerStyle={false}
        placeholder={{
          label: 'Select hair length...',
          // value: 'Short',
          color: '#c7c7cd',
        }}
        items={[
          {label: 'Very short', value: 'Very short'},
          {label: 'Short', value: 'Short'},
          {label: 'Medium-Length', value: 'Medium-Length'},
          {label: 'Long', value: 'Long'},
          {label: 'Very Long', value: 'Very Long'},
          {label: 'Bold', value: 'Bold'},
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
