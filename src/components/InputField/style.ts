import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    fontFamily: 'MuseoSansRounded-500',
    paddingLeft: 30,
    borderBottomWidth: 1,
    paddingVertical: Platform.OS === 'ios' ? 10 : 5,
    fontSize: Platform.OS === 'ios' ? 16 : 18,
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
    bottom: 7.5,
  },
});
