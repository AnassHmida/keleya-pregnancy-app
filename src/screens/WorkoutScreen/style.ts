import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';



export const styles = StyleSheet.create({
  picker: {width: '100%', height: 215, backgroundColor: Colors.WHITE},
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


