import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

export const SubmitButtonValidStyles = StyleSheet.create({
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

export const SubmitButtonInvalidStyles = StyleSheet.create({
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
