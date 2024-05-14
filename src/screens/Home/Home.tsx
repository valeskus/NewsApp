import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Search} from '../../components/Search';
import {RoundButton} from '../../UI/RoundButton';

export function Home(): JSX.Element {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.searchContainer}>
        <Search />
        <RoundButton icon={'add'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}
