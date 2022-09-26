import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import TextInput from '../../../components/TextInput';
import { INavigation } from '../../../types';

import styles from './styles';

const Login = ({ navigation }: { navigation: INavigation }) => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const handleChangeUsername = (value: string) => {
    setUsername(value);
  };

  const handleChangePass = (value: string) => {
    setPass(value);
  };

  const handleRecoverPass = () => {};

  const handleLogIn = () => {
    const creds = {
      username,
      pass,
    };
    console.log(creds);
  };

  const handleRegisterClicked = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Hello Again!</Text>
        <Text style={styles.greetingSec}>{"Welcome back you've\nbeen missed!"}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Username"
          value={username}
          onChangeText={handleChangeUsername}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={pass}
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
