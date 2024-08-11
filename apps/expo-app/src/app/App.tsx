import React, {useState} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import ImageViewer from './ImageViewer';
import MyButton from './MyButton';
import * as ImagePicker from 'expo-image-picker';
import * as assert from 'node:assert';

export const App = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
       assert(result.assets[0].uri)
       setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };
  const uri = './assets/background-image.png'

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer uri={uri}/>
      </View>
      <View style={styles.footerContainer}>
        <MyButton theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <MyButton label="Use this photo" />
      </View>
      <StatusBar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})

export default App;
