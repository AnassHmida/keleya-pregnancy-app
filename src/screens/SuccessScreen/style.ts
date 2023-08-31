import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  logoContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 80,
    alignItems: 'center',
  },
  logoText: {
    marginTop: 5,
    width: '60%',
    textAlign: 'center',
    fontSize: 20,

    fontFamily: 'MuseoSansRounded300',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
});
