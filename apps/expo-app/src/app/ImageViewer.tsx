import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

export default function ImageViewer(params: { placeholderImageSource: ImageSourcePropType, selectedImage: string }) {
  const imageSource = params.selectedImage
    ? { uri: params.selectedImage }
    : params.placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
