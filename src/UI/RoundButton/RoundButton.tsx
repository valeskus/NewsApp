import React from 'react';
import {Image, Pressable} from 'react-native';

import {Icons} from '../Icons';

import {styles} from './styles';

interface Props {
  icon: keyof typeof Icons;
  onPress: () => any;
}

export function RoundButton({icon, onPress}: Props): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
      <Image source={Icons[icon]} style={[styles.buttonImage]} />
    </Pressable>
  );
}
