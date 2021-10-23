import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {
  launchImageLibrary,
  showImagePicker,
  launchCamera,
} from 'react-native-image-picker';

export class Picture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileUri: 'qwe',
      resourcePath: {},
    };
  }

  // selectFile = () => {
  //   var options = {
  //     title: 'Select Image',

  //     customButtons: [
  //       {
  //         name: 'customOptionKey',
  //         title: 'Choose file from Custom Option',
  //       },
  //     ],

  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };

  //   showImagePicker(options, res => {
  //     console.log('ResponseImg = ', res);
  //     let source = res;

  //     this.setState({
  //       resourcePath: source,
  //     });
  //   });
  // };

  // Launch Camera

  cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,

        path: 'images',
      },
    };

    launchCamera(options, res => {
      console.log('ResponseCam = ', res);

      const source = {uri: res.uri};

      console.log('response', JSON.stringify(res));

      this.setState({
        filePath: res,

        fileData: res.data,

        fileUri: res.uri,
      });
    });
  };

  imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,

        path: 'images',
      },
    };

    launchImageLibrary(options, res => {
      console.log('ResponseLaunch = ', res);

      const source = {uri: res.uri};

      console.log('response', JSON.stringify(res));

      this.setState({
        filePath: res,

        fileData: res.data,

        fileUri: res.uri,
      });
    });
  };

  render() {
    console.log('state', this.state.filePath && this.state);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.image}
          onPress={this.imageGalleryLaunch}>
          {this.state.filePath && this.state.filePath.assets[0].uri ? (
            <Image
              source={{
                uri: this.state.filePath && this.state.filePath.assets[0].uri,
              }}
              style={{width: 100, height: 100, padding: 0}}
            />
          ) : (
            <Icon
              name="camera"
              size={40}
              color="#888888"
              style={{padding: 30}}
            />
          )}
        </TouchableOpacity>
        {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
          }}
          style={{width: 100, height: 100}}
        />

        <Image
          source={{uri: this.state.resourcePath.uri}}
          style={{width: 200, height: 200}}
        /> */}

        <Text style={{alignItems: 'center'}}>
          {this.state.resourcePath.uri}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#fff',
  },
  image: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#A9A9A9',
    overflow: 'hidden',
    // padding: 30,
  },
  button: {
    width: 250,

    height: 60,

    backgroundColor: '#3740ff',

    alignItems: 'center',

    justifyContent: 'center',

    borderRadius: 4,

    marginBottom: 12,
  },

  buttonText: {
    textAlign: 'center',

    fontSize: 15,

    color: '#fff',
  },
});

// import React, {useState} from 'react';

// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Button,
//   Image,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';

// import {
//   launchImageLibrary,
//   showImagePicker,
//   launchCamera,
// } from 'react-native-image-picker';

// export const Picture = () => {
//   const [fileUri, setFileUri] = useState('qwe');
//   const [resourcePath, setResourcePath] = useState({});
//   const [filePath, setFilePath] = useState('');
//   // const [fileUri, setFileUri] = useState({});
//   // selectFile = () => {
//   //   var options = {
//   //     title: 'Select Image',

//   //     customButtons: [
//   //       {
//   //         name: 'customOptionKey',
//   //         title: 'Choose file from Custom Option',
//   //       },
//   //     ],

//   //     storageOptions: {
//   //       skipBackup: true,
//   //       path: 'images',
//   //     },
//   //   };

//   //   showImagePicker(options, res => {
//   //     console.log('ResponseImg = ', res);
//   //     let source = res;

//   //     this.setState({
//   //       resourcePath: source,
//   //     });
//   //   });
//   // };

//   // Launch Camera

//   const cameraLaunch = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,

//         path: 'images',
//       },
//     };

//     const launchCamera =
//       (options,
//       res => {
//         console.log('ResponseCam = ', res);

//         const source = {uri: res.uri};

//         console.log('response', JSON.stringify(res));

//         setResourcePath({
//           filePath: res,

//           fileData: res.data,

//           fileUri: res.uri,
//         });
//       });
//   };

//   const imageGalleryLaunch = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,

//         path: 'images',
//       },
//     };

//     const launchImageLibrary =
//       (options,
//       res => {
//         console.log('ResponseLaunch = ', res);

//         const source = {uri: res.uri};

//         console.log('response', JSON.stringify(res));

//         setResourcePath({
//           filePath: res,

//           fileData: res.data,

//           fileUri: res.uri,
//         });
//       });
//   };

//   console.log('state', resourcePath);
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.image} onPress={imageGalleryLaunch}>
//         {resourcePath.filePath && resourcePath.filePath.assets[0].uri ? (
//           <Image
//             source={{
//               uri: resourcePath.filePath && resourcePath.filePath.assets[0].uri,
//             }}
//             style={{width: 100, height: 100, padding: 0}}
//           />
//         ) : (
//           <Icon name="camera" size={40} color="#888888" style={{padding: 30}} />
//         )}
//       </TouchableOpacity>
//       {/* <Image
//           source={{
//             uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
//           }}
//           style={{width: 100, height: 100}}
//         />

//         <Image
//           source={{uri: this.state.resourcePath.uri}}
//           style={{width: 200, height: 200}}
//         /> */}

//       {/* <Text style={{alignItems: 'center'}}>{resourcePath.uri}</Text> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // padding: 30,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // backgroundColor: '#fff',
//   },
//   image: {
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: '#A9A9A9',
//     overflow: 'hidden',
//     // padding: 30,
//   },
//   button: {
//     width: 250,

//     height: 60,

//     backgroundColor: '#3740ff',

//     alignItems: 'center',

//     justifyContent: 'center',

//     borderRadius: 4,

//     marginBottom: 12,
//   },

//   buttonText: {
//     textAlign: 'center',

//     fontSize: 15,

//     color: '#fff',
//   },
// });
