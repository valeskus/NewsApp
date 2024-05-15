import React from 'react';

import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import {styles} from './styles';
import {Header} from '../../components/Header';
import {usePostController} from './usePostController';

export function Post(): JSX.Element {
  const {title, time, image, description} = usePostController();
  return (
    <View style={styles.screenContainer}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <Header title={title} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>

      <ScrollView style={styles.detailsScreen} scrollEventThrottle={16}>
        <View style={styles.contentContainer}>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
