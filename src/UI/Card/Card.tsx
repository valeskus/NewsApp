import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import {styles} from './styles';

interface Props {
  onPress: () => void;
  onLongPress: () => void;
  time: string;
  title: string;
  description: string;
  image: string;
}

export function Card({
  onPress,
  onLongPress,
  time,
  title,
  description,
  image,
}: Props): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({pressed}) => [
        styles.cardContainer,
        pressed && styles.cardPressed,
      ]}>
      <Image source={{uri: image}} style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription} numberOfLines={1}>
          {description}
        </Text>
        <Text style={styles.note}>{time}</Text>
      </View>
    </Pressable>
  );
}
