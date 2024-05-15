import React from 'react';
import {Pressable, Text} from 'react-native';

import {styles} from './styles';

interface Props {
  title: string;
  onPress: () => any;
  accent?: boolean;
}

export function Button({title, onPress, accent}: Props): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        pressed && styles.buttonPressed,
        accent && styles.delete,
      ]}>
      <Text style={[styles.buttonTitle]}>{title}</Text>
    </Pressable>
  );
}
