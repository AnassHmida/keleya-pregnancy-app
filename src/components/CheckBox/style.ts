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

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderCurve: 3,
    marginRight: 10,
    backgroundColor: Colors.LIGHT_TEAL,
    borderColor: Colors.LIGHT_TEAL,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  checkedBox: {
    backgroundColor: Colors.BUBBLE_GUM,
    borderColor: Colors.BUBBLE_GUM,
  },
});
