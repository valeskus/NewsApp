import React from 'react';

import {styles} from './styles';

import {ActivityIndicator, FlatList} from 'react-native';
import {Card} from '../../../../UI/Card/Card';
import {useCardListController} from './useCardListController';
import {NewsModel} from '../../../../models';
import {Options} from '../../../Options';

interface Props {
  cardList: Array<NewsModel>;
}

export function CardList({cardList}: Props): JSX.Element {
  const {isLoading, activeCardId, onPress, onLongPress, modalVisible, onClose} =
    useCardListController();
  return (
    <>
      {isLoading && <ActivityIndicator size={'large'} color={'white'} />}
      {!isLoading && cardList && (
        <FlatList
          style={styles.recipesCardsContainer}
          data={cardList}
          renderItem={({item}) => (
            <Card
              time={item.time}
              title={item.title}
              description={item.description}
              image={item.image}
              onPress={() => onPress(item.id)}
              onLongPress={() => onLongPress(item.id)}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
      {modalVisible && (
        <Options
          modalVisible={modalVisible}
          onClose={onClose}
          cardId={activeCardId}
        />
      )}
    </>
  );
}
