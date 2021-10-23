import React, {ReactElement, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Paragraph, Portal, Dialog, Button} from 'react-native-paper';
export const EducationModal = () => {
  const [visible, setVisible] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const showDialog = () => setIsDialogVisible(true);
  const hideDialog = () => setIsDialogVisible(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDialog} style={styles.mainBtn}>
        <Text>Add education</Text>
      </TouchableOpacity>
      {/* <Menu.Item onPress={() => {}} title="Delete account" /> */}
      <Portal style={styles.modalContent}>
        <Dialog
          visible={isDialogVisible}
          onDismiss={hideDialog}
          style={styles.modalContent}>
          <Dialog.Title>Education</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Name of the educational institution</Paragraph>
            <TextInput placeholder="Specify a name" />
            <Paragraph>Faculties of specialty</Paragraph>
            <TextInput placeholder="Faculty" />
            <TextInput placeholder="Specialty" />
            <TextInput placeholder="Year" keyboardType="numeric" />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => {}}>Save</Button>
            <Button onPress={() => {}}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    borderRadius: 20,
  },
  container: {
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
    marginHorizontal: 10,
    marginTop: 5,
  },
  modalContent: {
    justifyContent: 'space-between',
    height: 450,
  },
  modalChoice: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  noBtn: {
    marginLeft: 15,
  },
  mainBtn: {
    marginHorizontal: 5,
    paddingBottom: 5,
  },
});
