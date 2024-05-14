import {StyleSheet} from 'react-native';
import {Colors} from '../Colors';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '85%',
    borderRadius: 10,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.07,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    flexDirection: 'column',
    marginVertical: 5,
    marginHorizontal: '30%',
    elevation: 8,
  },
  cardImage: {
    width: '100%',
    height: 195,
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 15,
  },
  cardTitle: {
    marginBottom: 10,
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    color: Colors.text,
  },
  cardDescription: {
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Roboto-Light',
    color: Colors.text,
  },
  note: {
    marginBottom: 15,
    fontSize: 12,
    fontFamily: 'Roboto-Thin',
    color: Colors.text_secondary,
    lineHeight: 17,
  },
  cardPressed: {
    transform: [{scale: 0.96}],
  },
  cardInfo: {
    paddingHorizontal: '5%',
  },
});
