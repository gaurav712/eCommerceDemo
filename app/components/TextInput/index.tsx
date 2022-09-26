import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const CustomTextInput = (props: any) => {
  const [showPass, setShowPass] = useState(false);

  const handleToggleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <View>
      <TextInput
        {...props}
        style={{
          ...props.style,
          ...styles.container,
        }}
        secureTextEntry={props.secureTextEntry && !showPass}
      />
      {props.secureTextEntry ? (
        <Icon
          style={styles.icon}
          name={showPass ? 'eye' : 'eye-slash'}
          color={'grey'}
          size={20}
          onPress={handleToggleShowPass}
        />
      ) : null}
    </View>
  );
};

export default CustomTextInput;
