import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    alignSelf: 'baseline',
  },
  smallSquare: {
    zIndex: 2,
    position: 'absolute',
    marginLeft: 30,
    marginTop: 50,
  },
  logoText: {
    marginTop: 5,
    width: '70%',
    fontFamily: 'MuseoSansRounded-500',
    textAlign: 'center',
    fontSize: 20,
    color: Colors.GREYISH_BROWN,
  },
  headerlogoTitleContainer: {
    alignSelf: 'center',
    zIndex: 2,
    position: 'absolute',
  },
  headerTitleContainer: {
    alignSelf: 'center',
    zIndex: 2,
    width: '100%',
    top: '20%',
    padding: 20,
    position: 'absolute',
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 4,
    height: '0%',
  },
  centerText: {
    textAlign: 'center',
    width: '100%',
  },
  headerImage: {
    flex: 1,
    zIndex: 1,
    width: undefined,
    height: undefined,
  },
  title: {
    fontSize: 25,
    fontFamily: 'MuseoSansRounded300',
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 15,
  },
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
    width: 100,
    height: 100,
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
