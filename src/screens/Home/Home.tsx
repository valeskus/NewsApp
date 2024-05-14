import React from 'react';

import {Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {Search} from '../../components/Search';
import {RoundButton} from '../../UI/RoundButton';
import {useHomeController} from './useHomeController';
import {Icons} from '../../UI/Icons';
import {CardList} from './components/CardsList';

export function Home(): JSX.Element {
  const {newsList} = useHomeController();
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.searchContainer}>
        <Search />
        <RoundButton icon={'add'} onPress={() => {}} />
      </View>
      {newsList.length === 0 && (
        <View style={styles.bodyContainer}>
          <Image source={Icons.frame} style={styles.image} />
          <Text style={styles.message}>No results found</Text>
        </View>
      )}
      {newsList.length !== 0 && <CardList cardList={newsList} />}
    </SafeAreaView>
  );
}
