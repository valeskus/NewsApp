import React from 'react';

import {styles} from './styles';

import {ActivityIndicator, FlatList} from 'react-native';
import {Card} from '../../../../UI/Card/Card';
import {useCardListController} from './useCardListController';
import {NewsModel} from '../../../../models';

interface Props {
  cardList: Array<NewsModel>;
}

export function CardList({cardList}: Props): JSX.Element {
  const {isLoading, onPress} = useCardListController();
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
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </>
  );
}
