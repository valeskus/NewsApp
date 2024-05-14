import {StyleSheet} from 'react-native';
import {Colors} from '../Colors';

export const styles = StyleSheet.create({
  buttonImage: {
    width: '50%',
    height: '50%',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 50,
    width: 47,
    height: 47,
    backgroundColor: Colors.background_secondary,
    justifyContent: 'center',
    position: 'relative',
    margin: 8,
  },

  buttonPressed: {
    transform: [{scale: 0.96}],
  },
});
