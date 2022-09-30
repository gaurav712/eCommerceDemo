import { StyleSheet } from 'react-native';
import { Colors } from '../../config';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent,
    width: '80%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: Colors.accent,
    elevation: 10,
    shadowRadius: 10,
  },
  labelText: {
    fontWeight: 'bold',
    color: Colors.foregroundDark,
    fontSize: 16,
  },
});

export default styles;
