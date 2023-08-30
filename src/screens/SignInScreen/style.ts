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



export const styles = StyleSheet.create({
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
});
