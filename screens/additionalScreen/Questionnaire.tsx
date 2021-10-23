import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput as Textarea,
} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-paper';
import {PhoneNum} from '../../components/ChoiceInputs/PhoneInput';
import {Header} from '../../components/Header';
import {validationSchema} from '../../components/AuthValidation';
import {CustomDatePicker} from '../../components/DatePicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CityPicker} from '../../components/ChoiceInputs/CityPicker';
import {SkinColor} from '../../components/ChoiceInputs/SkinColorPicker';
import {EyeColor} from '../../components/ChoiceInputs/EyePicker';
import {HairColor} from '../../components/ChoiceInputs/HairPicker';
import {HairLength} from '../../components/ChoiceInputs/HairLengthPicker';
import {EducationModal} from '../../components/Modal/EducationModal';
import {LanguageModal} from '../../components/Modal/LanguageModal';
import {Picture} from '../../components/TakePicture';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/Entypo';

export const Questionnaire = ({navigation}: any) => {
  const [text, setText] = React.useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  const touchedOutside = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        {/* <ScrollView style={styles.scrollView}> */}
        <TouchableWithoutFeedback onPress={touchedOutside}>
          <View>
            {/* <KeyboardAvoidingView
              keyboardVerticalOffset={100}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{
                ...styles.container,
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
              }}> */}
            <View style={[styles.form, isShowKeyboard && styles.formActive]}>
              <View style={styles.formikContainer}>
                <Formik
                  initialValues={{
                    name: '',
                    surname: '',
                    gender: 'female',
                    inst: '',
                    height: '',
                    clothingSize: '',
                    shoeSize: '',
                    chest: '',
                    waist: '',
                    hips: '',
                    appearanceType: '',
                    skinColor: '',
                    hairColor: '',
                    hairLength: '',
                    aboutMe: '',
                    education: '',
                    languagesSkills: '',
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
                            onPress={handleSubmit}
                            onPressOut={() => navigation.navigate('AboutMe')}
                            // disabled={!isValid}
                            disabled={false}>
                            <Text style={{color: 'gray', fontSize: 20}}>
                              Save
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </Header>
                      <View style={styles.nameContainer}>
                        <Picture />
                        <View style={styles.nameInputsCont}>
                          <TextInput
                            mode="outlined"
                            label="Name"
                            placeholder="Alex"
                            value={values.name}
                            onBlur={handleBlur('name')}
                            onChangeText={handleChange('name')}
                            maxLength={15}
                            right={<TextInput.Affix text="/15" />}
                            style={styles.nameInputs}
                            outlineColor="transparent"
                            theme={{
                              colors: {
                                primary: 'transparent',
                              },
                            }}
                          />
                          <TextInput
                            mode="outlined"
                            label="Second Name"
                            placeholder="Smith"
                            value={values.surname}
                            onBlur={handleBlur('surname')}
                            onChangeText={handleChange('surname')}
                            maxLength={15}
                            right={<TextInput.Affix text="/15" />}
                            style={{...styles.nameInputs, marginTop: 5}}
                            outlineColor="transparent"
                            theme={{
                              colors: {
                                primary: 'transparent',
                              },
                            }}
                          />
                          <View style={styles.btnContainer}>
                            <TouchableOpacity
                              style={[styles.btn, styles.leftBtn]}>
                              <Text>Female</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={[styles.btn, styles.rightBtn]}>
                              <Text>Male</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                      <View style={{...styles.input, marginTop: 25}}>
                        <Text>Date of birth</Text>
                        <CustomDatePicker />
                      </View>
                      <View
                        style={{
                          borderBottomWidth: 1,
                          borderColor: '#dbdbdb',
                        }}>
                        <CityPicker />
                      </View>
                      <View style={styles.input}>
                        <Icon name="phone" size={20} color="#888888" />
                        <PhoneNum />
                      </View>
                      <View style={styles.input}>
                        <Icon name="instagram" size={20} color="#888888" />
                        <TextInput
                          mode="outlined"
                          label="Instagram"
                          placeholder="@netcasting"
                          value={values.inst}
                          onBlur={handleBlur('inst')}
                          onChangeText={handleChange('inst')}
                          outlineColor="transparent"
                          theme={{
                            colors: {
                              primary: 'transparent',
                            },
                          }}
                          style={styles.inputInst}
                        />
                      </View>
                      <View>
                        <Text style={styles.sectionTitle}>PARAMETERS</Text>
                        <View style={styles.input}>
                          <Text>Height</Text>
                          <TextInput
                            mode="outlined"
                            keyboardType="numeric"
                            label="cm"
                            placeholder="175"
                            value={values.height}
                            onBlur={handleBlur('height')}
                            onChangeText={handleChange('height')}
                            maxLength={4}
                            outlineColor="transparent"
                            theme={{
                              colors: {
                                primary: 'transparent',
                              },
                            }}
                            style={styles.paramInput}
                          />
                        </View>
                        <View style={styles.input}>
                          <Text>Clothing size</Text>
                          <TextInput
                            mode="outlined"
                            keyboardType="numeric"
                            placeholder="30"
                            value={values.clothingSize}
                            onBlur={handleBlur('clothingSize')}
                            onChangeText={handleChange('clothingSize')}
                            maxLength={2}
                            outlineColor="transparent"
                            theme={{
                              colors: {
                                primary: 'transparent',
                              },
                            }}
                            style={styles.paramInput}
                          />
                        </View>
                        <View style={styles.input}>
                          <Text>Shoe size</Text>
                          <TextInput
                            mode="outlined"
                            keyboardType="numeric"
                            placeholder="EUR"
                            value={values.shoeSize}
                            onBlur={handleBlur('shoeSize')}
                            onChangeText={handleChange('shoeSize')}
                            maxLength={2}
                            outlineColor="transparent"
                            theme={{
                              colors: {
                                primary: 'transparent',
                              },
                            }}
                            style={styles.paramInput}
                          />
                        </View>
                        <View style={styles.input}>
                          <Text>Chest</Text>
                          <TextInput
                            mode="outlined"
                            keyboardType="numeric"
                            placeholder="cm"
                            value={values.chest}
                            onBlur={handleBlur('chest')}
                            onChangeText={handleChange('chest')}
                            maxLength={4}
                            outlineColor="transparent"
                            theme={{
                              colors: {
                                primary: 'transparent',
                              },
                            }}
                            style={styles.paramInput}
                          />
                        </View>
                        <View style={styles.input}>
                          <Text>Waist</Text>
                          <TextInput
                            mode="outlined"
                            keyboardType="numeric"
                            placeholder="cm"
                            value={values.waist}
                            onBlur={handleBlur('waist')}
                            onChangeText={handleChange('waist')}
                            outlineColor="transparent"
                            theme={{
                              colors: {
                                primary: 'transparent',
                              },
                            }}
                            maxLength={4}
                            style={styles.paramInput}
                          />
                        </View>
                        <View style={styles.input}>
                          <Text>Hips</Text>
                          <TextInput
                            mode="outlined"
                            keyboardType="numeric"
                            placeholder="cm"
                            value={values.hips}
                            onBlur={handleBlur('hips')}
                            onChangeText={handleChange('hips')}
                            maxLength={4}
                            outlineColor="transparent"
                            theme={{
                              colors: {
                                primary: 'transparent',
                              },
                            }}
                            style={styles.paramInput}
                          />
                        </View>
                        <View style={styles.inputPicker}>
                          <SkinColor />
                        </View>
                        <View style={styles.inputPicker}>
                          <EyeColor />
                        </View>
                        <View style={styles.inputPicker}>
                          <HairColor />
                        </View>
                        <View style={styles.inputPicker}>
                          <HairLength />
                        </View>
                        <View style={styles.textareaContainer}>
                          <Text style={{...styles.sectionTitle, marginTop: 25}}>
                            ABOUT MYSELF AND MY EXPERIENCE
                          </Text>
                          <Textarea
                            placeholder="Describe your work experience (what projects you worked on, what type and for how long).
                              For example:
                              actor, acrobat, dancer, fashion model for the Gucci brand. I've played in commercials for Coca-Cola, etc. Have 5 years of experience as a theater actor..."
                            value={values.aboutMe}
                            onBlur={handleBlur('aboutMe')}
                            onChangeText={handleChange('aboutMe')}
                            style={styles.textArea}
                            placeholderTextColor="grey"
                            numberOfLines={5}
                            multiline={true}
                          />
                        </View>
                        <View>
                          <Text style={styles.sectionTitle}>EDUCATION</Text>
                          <EducationModal />
                        </View>
                        <View>
                          <Text style={{...styles.sectionTitle, marginTop: 25}}>
                            LANGUAGES SKILLS
                          </Text>
                          <LanguageModal />
                        </View>
                        <View style={styles.checkboxContainer}>
                          <Text style={{...styles.sectionTitle, marginTop: 25}}>
                            ADDITIONAL DATA
                          </Text>
                          <BouncyCheckbox
                            size={25}
                            fillColor="orange"
                            unfillColor="#FFFFFF"
                            text="Extensive experience on filming"
                            iconStyle={{borderColor: 'orange'}}
                            textStyle={{
                              fontFamily: 'JosefinSans-Regular',
                              textDecorationLine: 'none',
                            }}
                            onPress={(isChecked: boolean) => {}}
                            style={styles.checkBox}
                          />
                          <BouncyCheckbox
                            size={25}
                            fillColor="orange"
                            unfillColor="#FFFFFF"
                            text="Have tatoos or piercings"
                            iconStyle={{borderColor: 'orange'}}
                            textStyle={{
                              fontFamily: 'JosefinSans-Regular',
                              textDecorationLine: 'none',
                            }}
                            onPress={(isChecked: boolean) => {}}
                            style={styles.checkBox}
                          />
                          <BouncyCheckbox
                            size={25}
                            fillColor="orange"
                            unfillColor="#FFFFFF"
                            text="Acting education"
                            iconStyle={{borderColor: 'orange'}}
                            textStyle={{
                              fontFamily: 'JosefinSans-Regular',
                              textDecorationLine: 'none',
                            }}
                            onPress={(isChecked: boolean) => {}}
                            style={styles.checkBox}
                          />
                          <BouncyCheckbox
                            size={25}
                            fillColor="orange"
                            unfillColor="#FFFFFF"
                            text="Willingness to go abroad"
                            iconStyle={{borderColor: 'orange'}}
                            textStyle={{
                              fontFamily: 'JosefinSans-Regular',
                              textDecorationLine: 'none',
                            }}
                            onPress={(isChecked: boolean) => {}}
                            style={{...styles.checkBox, marginBottom: 25}}
                          />
                        </View>
                      </View>
                    </>
                  )}
                </Formik>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 5,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 5,
  },
  // image: {
  //   borderWidth: 1,
  //   borderRadius: 30,
  //   borderColor: '#A9A9A9',
  //   padding: 30,
  // },
  form: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
  formActive: {
    borderColor: '#fff',
  },
  textareaContainer: {
    textAlign: 'left',
    padding: 0,
    marginHorizontal: 10,
  },
  nameInputs: {
    width: 200,
    height: 30,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderColor: '#A9A9A9',
  },
  paramInput: {
    width: 70,
    height: 30,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
    color: '#888888',
    fontWeight: '600',
  },
  formikContainer: {
    // alignItems: 'center',
    width: '100%',
  },
  nameContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 15,
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
    borderColor: '#A9A9A9',
    width: 100,
    paddingVertical: 3,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 45,
  },
  inputInst: {
    width: 170,
    height: 30,
    paddingBottom: 3,
    backgroundColor: '#fff',
    borderColor: 'transparent',
  },
  inputPicker: {
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    paddingHorizontal: 10,
  },
  checkboxContainer: {},
  checkBox: {
    marginTop: 15,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    paddingBottom: 5,
    borderColor: '#A9A9A9',
  },
});
