import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    height: 200,
    padding: '10%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
