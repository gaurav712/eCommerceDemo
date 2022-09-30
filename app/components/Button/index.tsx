import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';

import styles from './styles';

interface IProps {
  onSubmit: () => unknown;
  isLoading?: boolean;
  label: string;
}

const Button = ({ onSubmit, isLoading = false, label }: IProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: isLoading ? '#ddd' : '#ea726b',
          shadowColor: isLoading ? '#ddd' : '#ea726b',
        },
      ]}
      onPress={onSubmit}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size={25} color={'#ea726b'} />
      ) : (
        <Text style={styles.labelText}>{label}</Text>
      )}
    </Pressable>
  );
};

export default Button;
