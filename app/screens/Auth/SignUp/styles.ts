import { StyleSheet } from 'react-native';
import { Colors } from '../../../config';

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '80%',
  },
  directionText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.foregroundSecondary,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.foreground,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 2.5,
    marginBottom: 6,
    backgroundColor: Colors.accent,
  },
  loginTextContainer: {
    flexDirection: 'row',
  },
  loginText: {
    color: Colors.foregroundSecondary,
  },
  loginLinkText: {
    color: Colors.accentSecondary,
  },
  inputContainer: {
    marginVertical: 15,
  },
  registerButton: {
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
  registerButtonText: {
    fontWeight: 'bold',
    color: Colors.foregroundDark,
    fontSize: 16,
  },
});

export default styles;
