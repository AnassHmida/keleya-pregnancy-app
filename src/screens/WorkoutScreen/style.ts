import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

export const checkBoxStyle = StyleSheet.create({
  checkboxstyle: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 10,
  },
  checkboxlabelstyle: {
    fontSize: 16,
  },
  checkedboxstyle: {
    backgroundColor: Colors.BUBBLE_GUM,
    borderColor: Colors.BUBBLE_GUM,
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
  datepicker: {},
  textstyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
});

export const styles = StyleSheet.create({
  picker: {width: '100%', height: 215},
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboveButton: {
    fontSize: 16,
    color: Colors.GREYISH_BROWN,
    textAlign: 'center',
    marginBottom: 30,
  },
  logoText: {
    fontSize: 25,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 15,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 0.5,
    alignItems: 'center',
  },
  formContainer: {
    flex: 0.5,
    width: '90%',
  },
  datePicker: {},
});

export const LoginButtonsStyles = StyleSheet.create({
  containerstyle: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  textstyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
});
