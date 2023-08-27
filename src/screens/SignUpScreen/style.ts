import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

export const checkBoxStyle = StyleSheet.create({
  checkboxstyle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 3,
    marginRight: 10,
    borderColor: Colors.LIGHT_TEAL,
  },
  checkboxlabelstyle: {
    fontSize: 16,
  },
  checkedboxstyle: {
    backgroundColor: Colors.LIGHT_TEAL,
    borderColor: Colors.LIGHT_TEAL,
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
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
});
