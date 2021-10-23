import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ListItem = ({item}: any) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export const AboutMe = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        {/* <KeyboardAwareScrollView> */}

        <View style={styles.nameContainer}>
          <TouchableOpacity style={styles.image}>
            <Image
              source={{
                uri: 'https://picsum.photos/id/1027/200',
              }}
              style={{width: 120, height: 120, padding: 0}}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.name}>Alex Smith</Text>
            <Text style={styles.cityName}>Wroclaw</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.contactBtn}>
                <Icon name="phone" size={20} color="#A9A9A9" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactBtn}>
                <Icon name="mail" size={20} color="#A9A9A9" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactBtn}>
                <Icon name="instagram" size={20} color="#A9A9A9" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactBtn}>
                <Icon name="network" size={20} color="#A9A9A9" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <SectionList
          contentContainerStyle={{paddingHorizontal: 10}}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({section}) => (
            <>
              <Text style={styles.sectionHeader}>PHOTOS</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({item}) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({item, section}) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
        {/* </KeyboardAwareScrollView> */}
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
      {
        key: '6',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1020/200',
      },
      {
        key: '7',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1024/200',
      },

      {
        key: '8',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1027/200',
      },
      {
        key: '9',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1035/200',
      },
      {
        key: '10',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1038/200',
      },
    ],
  },
  // {
  //   title: 'Punk and hardcore',
  //   data: [
  //     {
  //       key: '1',
  //       text: 'Item text 1',
  //       uri: 'https://picsum.photos/id/1011/200',
  //     },
  //     {
  //       key: '2',
  //       text: 'Item text 2',
  //       uri: 'https://picsum.photos/id/1012/200',
  //     },

  //     {
  //       key: '3',
  //       text: 'Item text 3',
  //       uri: 'https://picsum.photos/id/1013/200',
  //     },
  //     {
  //       key: '4',
  //       text: 'Item text 4',
  //       uri: 'https://picsum.photos/id/1015/200',
  //     },
  //     {
  //       key: '5',
  //       text: 'Item text 5',
  //       uri: 'https://picsum.photos/id/1016/200',
  //     },
  //   ],
  // },
  // {
  //   title: 'Based on your recent listening',
  //   data: [
  //     {
  //       key: '1',
  //       text: 'Item text 1',
  //       uri: 'https://picsum.photos/id/1020/200',
  //     },
  //     {
  //       key: '2',
  //       text: 'Item text 2',
  //       uri: 'https://picsum.photos/id/1024/200',
  //     },

  //     {
  //       key: '3',
  //       text: 'Item text 3',
  //       uri: 'https://picsum.photos/id/1027/200',
  //     },
  //     {
  //       key: '4',
  //       text: 'Item text 4',
  //       uri: 'https://picsum.photos/id/1035/200',
  //     },
  //     {
  //       key: '5',
  //       text: 'Item text 5',
  //       uri: 'https://picsum.photos/id/1038/200',
  //     },
  //   ],
  // },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: '#121212',
  },
  sectionHeader: {
    color: '#888888',
    fontWeight: '600',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 5,
  },
  image: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#A9A9A9',
    overflow: 'hidden',
    // padding: 30,
  },
  itemPhoto: {
    width: 100,
    height: 100,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
  name: {
    fontSize: 18,
  },
  cityName: {
    fontSize: 17,
    color: '#A9A9A9',
  },
  nameContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 15,
  },
  btnContainer: {
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contactBtn: {
    borderWidth: 1,
    borderRadius: 11,
    padding: 5,
    marginRight: 10,
    borderColor: '#A9A9A9',
  },
});
