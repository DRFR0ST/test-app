import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

export const LanguageLevel = () => {
  return (
    <RNPickerSelect
      onValueChange={value => console.log(value)}
      placeholder={{
        label: 'Select your language level...',
        // value: 'Brown',
        color: '#c7c7cd',
      }}
      items={[
        {label: 'A1	Beginner', value: 'A1	Beginner'},
        {label: 'A2	Elementary', value: 'A2	Elementary'},
        {label: 'B1	Intermediate', value: 'B1	Intermediate'},
        {label: 'B2	Upper Intermediate', value: 'B2	Upper Intermediate'},
        {label: 'C1	Advanced', value: 'C1	Advanced'},
        {label: 'C2	Proficient', value: 'C2	Proficient'},
      ]}
    />
  );
};
