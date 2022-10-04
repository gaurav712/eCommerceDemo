import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    alignItems: 'center',
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  itemTitle: {
    maxWidth: '80%',
  },
  price: {
    fontWeight: 'bold',
    color: 'green',
  },
});
