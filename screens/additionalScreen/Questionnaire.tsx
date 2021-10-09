import React, {useState} from 'react';
import {
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Formik} from 'formik';
import {TextInput, IconButton, Colors} from 'react-native-paper';
import {Header} from '../../components/Header';
import {validationSchema} from '../../components/AuthValidation';
import {CustomDatePicker} from '../../components/DatePicker';
import LinearGradient from 'react-native-linear-gradient';

export const Questionnaire = ({navigation}: any) => {
  const [text, setText] = React.useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const touchedOutside = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={touchedOutside}>
      <View style={styles.screen}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={[styles.form, isShowKeyboard && styles.formActive]}>
            <View style={styles.formikContainer}>
              <Formik
                initialValues={{
                  name: '',
                  surname: '',
                }}
                onSubmit={values => console.log(values)}
                // validationSchema={validationSchema}
              >
                {({
                  values,
                  errors,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  isValid,
                }) => (
                  <>
                    <Header>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <Text style={{fontSize: 20, marginRight: 100}}>
                          Questionnaire
                        </Text>
                        <TouchableOpacity
                          // style={styles.registerBtn}
                          onPress={handleSubmit}
                          onPressOut={() => console.log('his')}
                          // disabled={!isValid}
                          disabled={false}>
                          <Text style={{color: 'gray', fontSize: 20}}>
                            Save
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Header>
                    <View style={styles.nameContainer}>
                      <IconButton
                        icon="camera"
                        color={Colors.green200}
                        size={40}
                        onPress={() => console.log('Pressed')}
                      />
                      <View style={styles.nameInputsCont}>
                        <TextInput
                          mode="outlined"
                          label="Name"
                          placeholder="Name"
                          value={values.name}
                          onBlur={handleBlur('name')}
                          onChangeText={handleChange('name')}
                          maxLength={15}
                          right={<TextInput.Affix text="/15" />}
                          style={styles.nameInputs}
                          // outlineColor={'transparent'}
                          underlineColor={'#9796f0'}
                        />
                        <TextInput
                          mode="outlined"
                          label="Second Name"
                          placeholder="Second Name"
                          value={values.surname}
                          onBlur={handleBlur('surname')}
                          onChangeText={handleChange('surname')}
                          maxLength={15}
                          right={<TextInput.Affix text="/15" />}
                          style={{...styles.nameInputs, marginTop: 5}}
                          // outlineColor={'transparent'}
                          underlineColor={'#9796f0'}
                        />
                        <View style={styles.btnContainer}>
                          <LinearGradient
                            start={{x: 1, y: 0}}
                            end={{x: 0, y: 0}}
                            colors={['#9796f0', '#fff']}
                            style={styles.linearGradient}>
                            <TouchableOpacity
                              style={[styles.btn, styles.leftBtn]}>
                              <Text style={{color: 'gray'}}>Female</Text>
                            </TouchableOpacity>
                          </LinearGradient>
                          <TouchableOpacity
                            style={[styles.btn, styles.rightBtn]}>
                            <Text>Male</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View>
                      <CustomDatePicker />
                    </View>
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
    backgroundColor: '#fff',
  },
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  form: {
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: '10%',
  },
  formActive: {
    marginTop: '5%',
    borderColor: '#fff',
  },
  nameInputs: {
    width: 200,
    height: 30,
    backgroundColor: '#fff',
    borderColor: 'red',
  },
  formikContainer: {
    // alignItems: 'center',
    width: '100%',
  },
  nameContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  nameInputsCont: {},
  btnContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  btn: {
    height: 25,
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
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    overflow: 'hidden',
  },
});
