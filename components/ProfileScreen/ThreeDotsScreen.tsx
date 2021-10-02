import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Menu, Modal, Portal, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';

export const ThreeDotsScreen: () => React.ReactElement = () => {
  const [visible, setVisible] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
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
          <Modal
            visible={isModalVisible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
            style={styles.modal}>
            <View style={styles.modalContent}>
              <Text>Do you want to log out?</Text>
              <View style={styles.modalChoice}>
                <TouchableOpacity onPress={() => {}}>
                  <Text>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noBtn} onPress={() => {}}>
                  <Text>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </Portal>
        <Menu.Item title="Log out" onPress={showModal} />
      </Menu>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  modal: {
    alignItems: 'center',
    borderRadius: 20,
  },
  modalContent: {
    height: 80,
    width: 200,
    justifyContent: 'space-between',
  },
  modalChoice: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  noBtn: {
    marginLeft: 15,
  },
});
