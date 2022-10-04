import { StyleSheet } from 'react-native';
import { Colors } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  headingText: {
    position: 'absolute',
    right: '20%',
    color: Colors.foreground,
    fontSize: 32,
  },
  flatlistHeader: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  itemContainer: {
    marginHorizontal: '2.5%',
    marginVertical: 5,
    padding: 15,
    elevation: 10,
    backgroundColor: Colors.foregroundDark,
    borderRadius: 5,
    width: '45%',
  },
  itemImage: {
    width: '100%',
    height: 75,
    resizeMode: 'contain',
  },
  itemTitleContainer: {
    position: 'absolute',
    backgroundColor: `${Colors.foregroundDark}bb`,
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  itemTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.foreground,
  },
  floatingCartButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: Colors.foregroundDark,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
