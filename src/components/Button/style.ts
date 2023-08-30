import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export const NobackgroundButtonStyles = StyleSheet.create({
  containerstyle: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  textstyle: {
    fontSize: 20,
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

export const SignUpButtonStyles = StyleSheet.create({
  containerstyle: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    paddingVertical: 15,
    width: '90%',
    borderRadius: 10,
    backgroundColor: Colors.LIGHT_TEAL,
  },

  textstyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
});
