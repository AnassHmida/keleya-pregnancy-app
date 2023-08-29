import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

export const SignUpButtonStyles = StyleSheet.create({
  containerstyle: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  textstyle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export const LoginButtonsStyles = StyleSheet.create({
  containerstyle: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_TEAL,
  },
  textstyle: {
    fontSize: 25,

    fontFamily: 'MuseoSansRounded-500',
    color: Colors.WHITE,
  },
});

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  logoContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 80,
    alignItems: 'center',
  },
  logoText: {
    marginTop: 5,
    width: '60%',
    textAlign: 'center',
    fontSize: 20,

    fontFamily: 'MuseoSansRounded300',
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
