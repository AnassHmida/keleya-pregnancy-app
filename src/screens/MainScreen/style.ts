import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },

  logoContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    marginTop: 5,
    width: '50%',
    fontFamily: 'MuseoSansRounded-500',
    textAlign: 'center',
    fontSize: 20,
    color: Colors.GREYISH_BROWN,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
});
