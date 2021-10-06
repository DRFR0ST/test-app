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
} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-paper';
import * as Yup from 'yup';
// import Icon from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be an email address')
    .min(8, 'Too short!')
    .required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(5, 'Password is too short - should be 5 chars minimum.')
    .matches(
      /[A-Z]\w+/,
      'Only Latin letters are allowed. At list one Uppercase is required.',
    ),
});

export const LoginPage = ({navigation}: any) => {
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
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#fff', '#9796f0']}
                style={styles.linearGradient}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={{color: 'gray'}}>Login</Text>
                </TouchableOpacity>
              </LinearGradient>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Registration')}>
                <Text>Register</Text>
              </TouchableOpacity>
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
                        outlineColor="transparent"
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
                        // right={<TextInput.Icon name="eye" />}
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
                      <LinearGradient
                        start={{x: 1, y: 1}}
                        end={{x: 0, y: 0}}
                        colors={['#9796f0', '#fff']}
                        style={styles.linearGradientBtn}>
                        <Text style={{color: '#fff'}}>Login</Text>
                      </LinearGradient>
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
    marginTop: '10%',
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
    borderColor: '#A9A9A9',
    width: 250,
    marginTop: 20,
    backgroundColor: '#BEC0C2',
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
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    overflow: 'hidden',
  },
  linearGradientBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
});
