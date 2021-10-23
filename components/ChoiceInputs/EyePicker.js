import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View, Text} from 'react-native';

export const EyeColor = () => {
  return (
    <View style={styles.container}>
      <Text>Eye color: </Text>
      <View style={styles.picker}>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          useNativeAndroidPickerStyle={false}
          placeholder={{
            label: 'Select color...',
            value: 'Brown',
            color: '#c7c7cd',
          }}
          items={[
            {label: 'Brown', value: 'Brown '},
            {label: 'Blue', value: 'Blue'},
            {label: 'Hazel', value: 'Hazel'},
            {label: 'Amber', value: 'Amber'},
            {label: 'Gray', value: 'Gray'},
            {label: 'Green', value: 'Green'},
            {label: 'other', value: 'other'},
          ]}
        />
      </View>
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
  picker: {
    fontSize: 14,
    paddingHorizontal: 10,
    color: 'black',
    // height: 70,
  },
});
