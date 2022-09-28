import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from '../../../components/TextInput';
import { IApplicationState } from '../../../store';
import { login } from '../../../store/auth/actions';
import { INavigation } from '../../../types';

import styles from './styles';

const Login = ({ navigation }: { navigation: INavigation }) => {
  const dispatch = useDispatch();
  const { loginCreds } = useSelector((state: IApplicationState) => state.authReducer);

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const _storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      console.log('error saving token');
    }
  };

  const handleChangeUsername = (value: string) => {
    setUserEmail(value);
  };

  const handleChangePass = (value: string) => {
    setPassword(value);
  };

  const handleRecoverPass = () => {};

  const handleLogIn = () => {
    const creds = {
      userEmail,
      password,
    };
    dispatch(login(creds));
  };

  useEffect(() => {
    if (loginCreds.token) {
      _storeToken(loginCreds.token);
      navigation.navigate('Home'); // Authenticated
    }
  }, [loginCreds.token]);

  const handleRegisterClicked = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Hello Again</Text>
          <View style={styles.symbolContainer}>
            <View style={styles.verticalBar} />
            <View style={styles.dot} />
          </View>
        </View>
        <Text style={styles.greetingSec}>{"Welcome back you've\nbeen missed!"}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Email"
          value={userEmail}
          onChangeText={handleChangeUsername}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={handleChangePass}
        />
        <Pressable style={styles.recoveryButton} onPress={handleRecoverPass}>
          <Text style={styles.recoveryText}>Recovery Password</Text>
        </Pressable>
      </View>
      <Pressable style={styles.loginButton} onPress={handleLogIn}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </Pressable>
      <View style={styles.registerTextContainer}>
        <Text style={styles.registerText}>Not a member? </Text>
        <Pressable onPress={handleRegisterClicked}>
          <Text style={styles.registerLinkText}>Register now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
