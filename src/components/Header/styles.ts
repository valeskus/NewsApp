import {StyleSheet} from 'react-native';
import {Colors} from '../../UI/Colors';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    position: 'relative',
    zIndex: 99,
    backgroundColor: Colors.background,
  },

  headerTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    flex: 1,
    lineHeight: 35,
    marginHorizontal: '18%',
    textAlign: 'center',
  },

  buttonPressed: {
    transform: [{scale: 0.96}],
  },

  leftButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    zIndex: 10,
    marginLeft: 10,
    position: 'absolute',
  },
});
