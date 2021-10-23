import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const PhoneNum = () => {
  const [value, setValue] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="PL"
            layout="first"
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
              setCountryCode(phoneInput.current?.getCountryCode() || '');
            }}
            countryPickerProps={{withAlphaFilter: true}}
            disabled={disabled}
            withDarkTheme
            withShadow={false}
            autoFocus
            textInputStyle={{
              padding: 0,
              // backgroundColor: 'green',
            }}
            containerStyle={{
              width: 270,
              height: 40,
              paddingVertical: 0,
              // textAlign: 'left',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            flagButtonStyle={{
              paddingVertical: 0,
            }}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginLeft: 60,
    // justifyContent: 'flex-end',
  },
  wrapper: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
