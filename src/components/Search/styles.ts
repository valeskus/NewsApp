import {StyleSheet} from 'react-native';

import {Colors} from '../../UI/Colors';

export const styles = StyleSheet.create({
  searchBarContainer: {
    borderRadius: 10,
    width: '80%',
    height: 48,
    backgroundColor: Colors.background_secondary,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'flex-start',
    fontSize: 15,
  },
  searchBarInput: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    padding: 0,
    color: Colors.text_secondary,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 13,
    right: 13,
    zIndex: 0,
  },
  fakeInput: {
    lineHeight: 50,
  },
  searchBarIcon: {
    width: 27,
    height: 27,
    marginVertical: 7,
    marginHorizontal: 5,
  },
  searchBarIconContainer: {
    justifyContent: 'center',
  },

  searchPress: {
    transform: [{scale: 0.96}],
  },
  placeholder: {
    color: Colors.text_secondary,
  },
  inputsContainer: {
    position: 'relative',
    flex: 1,
  },
});
