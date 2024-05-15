import React, {useCallback} from 'react';

import {Text, View} from 'react-native';
import {styles} from './styles';
import {RoundButton} from '../../UI/RoundButton';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
}

export function Header({title}: Props): JSX.Element {
  const navigation = useNavigation();
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, {paddingTop: top}]}>
      <View style={[styles.leftButton, {top: top}]}>
        <RoundButton icon={'arrow'} onPress={onGoBack} />
      </View>
      <Text style={styles.headerTitle} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}
