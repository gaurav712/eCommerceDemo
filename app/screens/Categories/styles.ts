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
    padding: 10,
    elevation: 10,
    backgroundColor: Colors.foregroundDark,
    borderRadius: 5,
    width: '45%',
  },
  itemTitle: {},
});
