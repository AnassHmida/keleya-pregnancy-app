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
    fontWeight: 'normal',
  },
});

export const NobackgroundButtonBoldStyles = StyleSheet.create({
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

export const ButtonValidStyles = StyleSheet.create({
  containerstyle: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: Colors.LIGHT_TEAL,
  },

  textstyle: {
    fontSize: 25,
    fontFamily: 'MuseoSansRounded-500',
    textAlign: 'center',
    color: Colors.WHITE,
  },
});

export const ButtonInvalidStyles = StyleSheet.create({
  containerstyle: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: Colors.WARM_GREY,
  },
  textstyle: {
    fontSize: 25,
    fontFamily: 'MuseoSansRounded-500',
    textAlign: 'center',
    color: Colors.WHITE,
  },
});
