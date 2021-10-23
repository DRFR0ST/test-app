import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View, Text} from 'react-native';

export const SkinColor = () => {
  return (
    <View style={styles.container}>
      <Text>Skin color: </Text>
      <RNPickerSelect
        onValueChange={value => console.log(value)}
        useNativeAndroidPickerStyle={false}
        placeholder={{
          label: 'Select color...',
          // value: 'Fair skin',
          color: '#c7c7cd',
        }}
        items={[
          {label: 'Pale white skin', value: 'Pale white skin'},
          {label: 'Fair skin', value: 'Fair skin'},
          {
            label: 'Medium white to light brown',
            value: 'Medium white to light brown',
          },
          {label: 'Olive, moderate brown', value: 'Olive, moderate brown'},
          {label: 'Brown skin', value: 'Brown skin'},
          {
            label: 'Dark brown or black skin',
            value: 'Dark brown or black skin',
          },
          {label: 'Albinism', value: 'Albinism'},
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
