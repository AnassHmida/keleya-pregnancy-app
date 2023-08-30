import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';




export const InputStyle = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    fontFamily: 'MuseoSansRounded-500',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
    bottom: 12,
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
