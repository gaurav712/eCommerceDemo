import { StyleSheet } from 'react-native';

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
    color: '#606060',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#404040',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 2.5,
    marginBottom: 6,
    backgroundColor: '#ea726b',
  },
  loginTextContainer: {
    flexDirection: 'row',
  },
  loginText: {
    color: '#606060',
  },
  loginLinkText: {
    color: 'teal',
  },
  inputContainer: {
    marginVertical: 15,
  },
  registerButton: {
    backgroundColor: '#ea726b',
    width: '80%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#ea726b',
    elevation: 10,
    shadowRadius: 10,
  },
  registerButtonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
