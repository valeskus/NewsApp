import {StyleSheet} from 'react-native';
import {Colors} from '../../UI/Colors';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 225,
    height: 210,
    objectFit: 'contain',
  },
  message: {
    color: Colors.text_secondary,
    fontFamily: 'Roboto',
    fontSize: 16,
    marginTop: 25,
  },
});
