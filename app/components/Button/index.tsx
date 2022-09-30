import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import { Colors } from '../../config';

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
          backgroundColor: isLoading ? Colors.backgroundSecondary : Colors.accent,
          shadowColor: isLoading ? Colors.backgroundSecondary : Colors.accent,
        },
      ]}
      onPress={onSubmit}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size={25} color={Colors.accent} />
      ) : (
        <Text style={styles.labelText}>{label}</Text>
      )}
    </Pressable>
  );
};

export default Button;
