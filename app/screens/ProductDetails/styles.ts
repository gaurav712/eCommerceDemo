import { StyleSheet } from 'react-native';
import { Colors } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.foregroundDark,
  },
  scrollContainer: {
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '80%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
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
    backgroundColor: Colors.accentSecondary,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  addCartText: {
    color: Colors.foregroundDark,
  },
});
