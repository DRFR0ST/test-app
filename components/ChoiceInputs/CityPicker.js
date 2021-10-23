import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const CityPicker = () => {
  return (
    <View style={styles.container}>
      <Text>City: </Text>
      <RNPickerSelect
        onValueChange={value => console.log(value)}
        useNativeAndroidPickerStyle={false}
        placeholder={{
          label: 'Select city...',
          // value: 'Warsaw',
          color: '#c7c7cd',
        }}
        items={[
          {label: 'Warsaw', value: 'Warsaw'},
          {label: 'Lodz ', value: 'Lodz '},
          {label: 'Krakow', value: 'Krakow'},
          {label: 'Wroclaw', value: 'Wroclaw'},
          {label: 'Poznan', value: 'Poznan'},
          {label: 'Gdansk', value: 'Gdansk'},
          {label: 'Szczecin', value: 'Szczecin'},
          {label: 'Bydgoszcz', value: 'Bydgoszcz'},
          {label: 'Lublin', value: 'Lublin'},
          {label: 'Katowice', value: 'Katowice'},
          {label: 'Bialystok', value: 'Bialystok'},
          {label: 'Gdynia', value: 'Gdynia'},
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
    marginTop: -10,
  },
});
