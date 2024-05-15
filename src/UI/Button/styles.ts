import {StyleSheet} from 'react-native';
import {Colors} from '../Colors';

export const styles = StyleSheet.create({
  buttonTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    textAlign: 'center',
    color: Colors.background,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: 63,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    marginBottom: 10,
  },

  buttonPressed: {
    transform: [{scale: 0.96}],
  },

  delete: {
    backgroundColor: Colors.accent,
  },
});
