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
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  greetingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#404040',
  },
  symbolContainer: {
    marginLeft: 5,
  },
  verticalBar: {
    width: 6,
    height: 20,
    borderTopWidth: 20,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 3,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderTopColor: '#ea726b',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  dot: {
    bottom: 0,
    width: 6,
    height: 6,
    borderRadius: 3,
    marginBottom: 12,
    backgroundColor: '#ea726b',
  },
  greetingSec: {
    fontSize: 16,
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
