import { StyleSheet } from 'react-native';
import { Colors } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 30,
    marginHorizontal: 5,
    marginVertical: 15,
  },
  itemContainer: {
    width: '30%',
    margin: '1.75%',
    padding: 10,
    alignItems: 'center',
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  image: {
    width: '75%',
    aspectRatio: 1,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  infoContainer: {
    marginTop: 10,
  },
  itemTitle: {},
  price: {
    fontWeight: 'bold',
    color: Colors.green,
  },
});
