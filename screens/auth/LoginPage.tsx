import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-paper';
import {validationSchema} from '../../components/AuthValidation';
import {useAppNavigation} from '../../routes/Routes';

export const LoginPage = ({}: any) => {
  const navigation = useAppNavigation();
  const image = {
    uri: 'https://funnyness.com/sites/default/files/images/in/01-2016/1-funny-and-stylish-monkey-picture.jpg',
  };
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const touchedOutside = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  // const dismissedValues = () => {
  //   setIsShowKeyboard(false);
  //   // dispatch(authSignUpUser(state));
  //   Keyboard.dismiss();
  //   // setState(initialState);
  // };

  const navigateToScreen = (screenName: string) => () => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableWithoutFeedback onPress={touchedOutside}>
      <View style={styles.screen}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={[styles.form, isShowKeyboard && styles.formActive]}>
            <View style={styles.btnContainer}>
              <Pressable style={styles.btn}>
                <Text>Login</Text>
              </Pressable>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: -1}}
                colors={['#fff', '#9796f0']}
                style={styles.linearGradient}>
                <Pressable
                  style={styles.btn}
                  onPress={navigateToScreen('Registration')}>
                  <Text style={{color: 'gray'}}>Registration</Text>
                </Pressable>
              </LinearGradient>
            </View>
            <View style={styles.formikContainer}>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>
                {({
                  values,
                  errors,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  isValid,
                }) => (
                  <>
                    <View>
                      <TextInput
                        style={styles.textInput}
                        label="Email"
                        textAlign={'center'}
                        value={values.email}
                        mode="outlined"
                        placeholder="netcasting@gmail.com"
                        outlineColor="transparent"
                        theme={{
                          colors: {
                            primary: 'transparent',
                          },
                        }}
                        onBlur={handleBlur('email')}
                        onChangeText={handleChange('email')}
                        keyboardType="email-address"
                      />
                      {errors.email && (
                        <Text
                          style={{marginLeft: 10, fontSize: 11, color: 'red'}}>
                          {errors.email}
                        </Text>
                      )}
                      <TextInput
                        style={styles.textInput}
                        label="Password"
                        mode="outlined"
                        value={values.password}
                        onBlur={handleBlur('password')}
                        onChangeText={handleChange('password')}
                        secureTextEntry
                        outlineColor="transparent"
                        theme={{
                          colors: {
                            primary: 'transparent',
                          },
                        }}
                        placeholder="Enter your password"
                      />
                      {errors.password && (
                        <Text
                          style={{marginLeft: 10, fontSize: 11, color: 'red'}}>
                          {errors.password}
                        </Text>
                      )}
                    </View>

                    <TouchableOpacity
                      style={styles.registerBtn}
                      onPress={handleSubmit}
                      disabled={!isValid}>
                      <Text>Login</Text>
                    </TouchableOpacity>
                  </>
                )}
              </Formik>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  formActive: {
    marginTop: '5%',
    borderColor: '#fff',
  },
  image: {
    width: 170,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 60,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btn: {
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#A9A9A9',
    width: 100,
    paddingVertical: 3,
    overflow: 'hidden',
  },
  registerBtn: {
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#9796f0',
    width: 250,
    marginTop: 20,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  formikContainer: {
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
  },
  textInput: {
    width: 300,
    height: 30,
    marginTop: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
