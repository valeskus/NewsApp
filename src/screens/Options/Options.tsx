import React from 'react';

import {Modal, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../UI/Button';

interface Props {
  modalVisible: boolean;
  onClose: () => void;
  cardId: string;
}

export function Options({modalVisible, onClose}: Props): JSX.Element {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Button onPress={() => {}} title="Delete" accent={true} />
          <Button onPress={onClose} title="Close" />
        </View>
      </View>
    </Modal>
  );
}
