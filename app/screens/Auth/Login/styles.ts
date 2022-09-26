import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  greetingContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  greeting: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#404040',
  },
  greetingSec: {
    fontSize: 20,
    textAlign: 'center',
    color: '#606060',
  },
  inputContainer: {
    marginVertical: 15,
  },
  recoveryButton: {
    marginTop: 5,
    alignItems: 'flex-end',
  },
  recoveryText: {},
  loginButton: {
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
  loginButtonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
  loginBottomDividerText: {},
  registerTextContainer: {
    flexDirection: 'row',
  },
  registerText: {},
  registerLinkText: {
    color: 'teal',
  },
});

export default styles;
