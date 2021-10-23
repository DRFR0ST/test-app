import React, {ReactElement, useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Menu, Portal, Dialog, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';

export const ThreeDotsScreen: () => ReactElement = () => {
  const [visible, setVisible] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const showDialog = () => setIsDialogVisible(true);
  const hideDialog = () => setIsDialogVisible(false);
  return (
    <>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity style={styles.icon} onPress={openMenu}>
            <Icon name="dots-three-vertical" size={20} color="#000" />
          </TouchableOpacity>
        }>
        <Menu.Item onPress={() => {}} title="User Policies" />
        <Menu.Item onPress={() => {}} title="Change password" />
        <Menu.Item onPress={() => {}} title="Delete account" />

        <Portal>
          <Dialog visible={isDialogVisible} onDismiss={hideDialog}>
            <Dialog.Title>Do you want to log out?</Dialog.Title>
            <Dialog.Actions>
              <Button onPress={() => {}}>Yes</Button>
              <Button onPress={() => {}}>No</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Menu.Item title="Log out" onPress={showDialog} />
      </Menu>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});
