import React from 'react';
import {View, StyleSheet} from 'react-native';
export const Header = props => {
  return (
    <View
      style={{...styles.header, ...props.style}}
      activeOpacity={0.8}
      onPress={props.keyBoardHide}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 28,
    borderBottomWidth: 1,
    borderBottomColor: '#b3b3b3',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 30,
  },
});
