import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../config';

const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: Colors.foregroundDark,
    marginVertical: 7.5,
    width: dimensions.width * 0.8,
    paddingHorizontal: 15,
  },
  icon: {
    position: 'absolute',
    right: 15,
    alignSelf: 'flex-end',
    bottom: 22,
  },
});

export default styles;
