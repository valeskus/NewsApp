import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

export const useCardListController = () => {
  const [isLoading] = useState<boolean>(false);
  const navigation = useNavigation();
  const onPress = (id: string) => {
    navigation.navigate('Post', {id});
  };

  return {
    isLoading,
    onPress,
  };
};
