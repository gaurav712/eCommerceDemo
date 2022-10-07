import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import GradientBackground from '../../../components/GradientBackground';
import CustomTextInput from '../../../components/TextInput';
import { IApplicationState } from '../../../store';
import { signUp } from '../../../store/auth/actions';
import { INavigation } from '../../../types';
import styles from './styles';

const SignUp = ({ navigation }: { navigation: INavigation }) => {
  const dispatch = useDispatch();
  const { loginCreds, isLoading } = useSelector((state: IApplicationState) => state.authReducer);

  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const _storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      console.log('error saving token');
    }
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handleEmailChange = (value: string) => {
    setUserEmail(value);
  };

  const handlePassChange = (value: string) => {
    setPassword(value);
  };

  const handleLoginClicked = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    const userData = {
      username,
      userEmail,
      password,
    };
    dispatch(signUp(userData));
  };

  useEffect(() => {
    if (loginCreds.token) {
      _storeToken(loginCreds.token);
      navigation.navigate('Home'); // Authenticated
    }
  }, [loginCreds.token]);

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.directionText}>START FOR FREE</Text>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Create new account</Text>
            <View style={styles.dot} />
          </View>
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Already a member? </Text>
            <Pressable onPress={handleLoginClicked}>
              <Text style={styles.loginLinkText}>Log In</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <CustomTextInput
            placeholder={'Username'}
            value={username}
            onChangeText={handleUsernameChange}
          />
          <CustomTextInput
            placeholder={'e-Mail'}
            value={userEmail}
            onChangeText={handleEmailChange}
          />
          <CustomTextInput
            placeholder={'Password'}
            value={password}
            onChangeText={handlePassChange}
            secureTextEntry={true}
          />
        </View>
        <Button label={'Create Account'} isLoading={isLoading} onSubmit={handleRegister} />
      </View>
    </GradientBackground>
  );
};

export default SignUp;
