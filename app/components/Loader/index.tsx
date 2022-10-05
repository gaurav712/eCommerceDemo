import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Colors } from '../../config';

const Loader = ({ size }: { size: number | 'small' | 'large' }) => {
  return <ActivityIndicator size={size} color={Colors.accent} />;
};

export default Loader;
