import React, {useState} from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import {validationSchema} from '../../components/AuthValidation';
import {useAppNavigation} from '../../routes/Routes';

// TODO: Solve the lots of repetition in this file and LoginPage. DRY approach is cool. (Don't Repeat Yourself)
// TODO: Try breaking functions into smaller pieces and inside a component, only declare variables and functions when they depend on props or state.
// TODO: Can you easily read the JSX code below? Maybe refactor this into smaller components?

export const RegisterPage = ({}: any) => {
  const navigation = useAppNavigation();

  const image = {
    uri: 'http://www.fillster.com/images/comments/158d.jpg',
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
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}
                colors={['#9796f0', '#fff']}
                style={styles.linearGradient}>
                <Pressable
                  style={[styles.btn, styles.leftBtn]}
                  onPress={navigateToScreen('Login')}>
                  <Text style={{color: 'gray'}}>Login</Text>
                </Pressable>
              </LinearGradient>
              <Pressable style={[styles.btn, styles.rightBtn]}>
                <Text>Registration</Text>
              </Pressable>
            </View>
            <View style={styles.formikContainer}>
              <Formik
                initialValues={{
                  fullName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
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
                        label="Name"
                        placeholder="Alex"
                        mode="outlined"
                        textAlign={'center'}
                        value={values.fullName}
                        outlineColor="transparent"
                        theme={{
                          colors: {
                            primary: 'transparent',
                          },
                          // borderColor:
                        }}
                        onBlur={handleBlur('fullName')}
                        onChangeText={handleChange('fullName')}
                        underlineColor={'#9796f0'}
                      />
                      {errors.fullName && (
                        <Text
                          style={{marginLeft: 10, fontSize: 11, color: 'red'}}>
                          {errors.fullName}
                        </Text>
                      )}
                      <TextInput
                        style={styles.textInput}
                        label="Email"
                        placeholder="netcasting@gmail.com"
                        textAlign={'center'}
                        value={values.email}
                        mode="outlined"
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
                        placeholder="Enter your password"
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
                      />
                      {errors.password && (
                        <Text
                          style={{marginLeft: 10, fontSize: 11, color: 'red'}}>
                          {errors.password}
                        </Text>
                      )}
                      <TextInput
                        style={{...styles.textInput}}
                        label="Repeat password"
                        placeholder="Second time pls :)"
                        mode="outlined"
                        value={values.confirmPassword}
                        onBlur={handleBlur('confirmPassword')}
                        onChangeText={handleChange('confirmPassword')}
                        secureTextEntry
                        outlineColor="transparent"
                        theme={{
                          colors: {
                            primary: 'transparent',
                          },
                        }}
                      />
                      {errors.confirmPassword && (
                        <Text
                          style={{marginLeft: 10, fontSize: 11, color: 'red'}}>
                          {errors.confirmPassword}
                        </Text>
                      )}
                    </View>

                    <TouchableOpacity
                      style={styles.registerBtn}
                      onPress={handleSubmit}
                      onPressOut={() => navigation.navigate('Questionnaire')}
                      disabled={!isValid}>
                      <Text>Register</Text>
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
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: '#A9A9A9',
    width: 100,
    paddingVertical: 3,
  },
  leftBtn: {
    borderRightWidth: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightBtn: {
    borderLeftWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#9796f0',
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
