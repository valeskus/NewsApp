import {StyleSheet} from 'react-native';
import {Colors} from '../../UI/Colors';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  imageContainer: {
    width: '100%',
    height: 500,
    position: 'absolute',
    zIndex: 1,
  },
  detailsScreen: {
    flex: 1,
    zIndex: 5,
  },
  description: {
    marginBottom: 20,
    fontFamily: 'Roboto-Light',
    fontSize: 16,
    color: Colors.text,
  },
  time: {
    marginTop: 20,
    fontFamily: 'Roboto-Thin',
    fontSize: 12,
    marginBottom: 20,
  },
  contentContainer: {
    zIndex: 10,
    marginTop: 300,
    backgroundColor: Colors.background,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingTop: 20,
    paddingHorizontal: '6%',
  },
});
