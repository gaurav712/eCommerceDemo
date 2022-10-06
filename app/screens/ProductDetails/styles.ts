import { Dimensions, StyleSheet } from 'react-native';
import { Colors, gradientColors } from '../../config';

const dimensions = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: Colors.foregroundDark,
    width: dimensions.width,
    alignItems: 'center',
    padding: 10,
    elevation: 5,
  },
  image: {
    width: '80%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  infoContainer: {
    marginVertical: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  description: {
    marginTop: 5,
  },
  addCart: {
    width: '100%',
    paddingTop: 10,
    marginBottom: -10,
    alignItems: 'center',
    elevation: 5,
    backgroundColor: gradientColors.end,
  },
});
