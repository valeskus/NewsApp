import React from 'react';
import {Image, TextInput, Pressable, View, Text} from 'react-native';

import {Icons} from '../../UI/Icons';

import {styles} from './styles';
import {useSearchController} from './useSearchController';

export function Search(): JSX.Element {
  const {searchTerm, isFocused, handleChange, handleFocus, handleBlur} =
    useSearchController();
  return (
    <Pressable style={styles.searchBarContainer} onPress={() => {}}>
      <Pressable
        onPress={() => {}}
        style={({pressed}) => [
          styles.searchBarIconContainer,
          pressed && styles.searchPress,
        ]}
        disabled={!searchTerm}>
        <Image source={Icons.search} style={styles.searchBarIcon} />
      </Pressable>
      <View style={styles.inputsContainer}>
        {!isFocused && (
          <Text
            style={[styles.searchBarInput, styles.fakeInput]}
            numberOfLines={1}>
            {searchTerm}
          </Text>
        )}
        {!searchTerm && (
          <Text
            style={[
              styles.searchBarInput,
              styles.placeholder,
              styles.fakeInput,
            ]}>
            Search
          </Text>
        )}
        <TextInput
          style={[styles.searchBarInput, {opacity: Number(isFocused)}]}
          onChangeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={searchTerm}
          autoCapitalize="none"
          onSubmitEditing={() => {}}
        />
      </View>
    </Pressable>
  );
}
