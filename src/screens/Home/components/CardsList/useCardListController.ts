import {useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';

export const useCardListController = () => {
  const [isLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeCardId, setActiveCardId] = useState<string>('');

  const navigation = useNavigation();
  const onPress = (id: string) => {
    navigation.navigate('Post', {id});
  };
  const onLongPress = (id: string) => {
    setModalVisible(true);
    setActiveCardId(id);
  };
  const onClose = useCallback(() => {
    setModalVisible(false);
  }, []);

  return {
    isLoading,
    activeCardId,
    onPress,
    onLongPress,
    modalVisible,
    onClose,
  };
};
