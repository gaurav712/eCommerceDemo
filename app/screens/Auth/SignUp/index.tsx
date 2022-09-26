import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import CustomTextInput from '../../../components/TextInput';
import { INavigation } from '../../../types';
import styles from './styles';

const SignUp = ({ navigation }: { navigation: INavigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleFirstNameChange = (value: string) => {
    setFirstName(value);
  };

  const handleLastNameChange = (value: string) => {
    setLastName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePassChange = (value: string) => {
    setPass(value);
  };

  const handleLoginClicked = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    const userData = {
      firstName,
      lastName,
      email,
      pass,
    };
    console.log(userData);
  };

  return (
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
          placeholder={'First Name'}
          value={firstName}
          onChangeText={handleFirstNameChange}
        />
        <CustomTextInput
          placeholder={'Last Name'}
          value={lastName}
          onChangeText={handleLastNameChange}
        />
        <CustomTextInput placeholder={'e-Mail'} value={email} onChangeText={handleEmailChange} />
        <CustomTextInput
          placeholder={'Password'}
          value={pass}
          onChangeText={handlePassChange}
          secureTextEntry={true}
        />
      </View>
      <Pressable style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Create account</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;
