import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { INavigation } from '../../../types';

const Login = ({ navigation }: { navigation: INavigation }) => {
  return (
    <View>
      <Text>Hello, this is login!</Text>
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default Login;
