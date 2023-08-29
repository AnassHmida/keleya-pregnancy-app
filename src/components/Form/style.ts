import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  formContainer: {
    flex: 1,
    width: '90%',
  },
  title: {
    fontSize: 25,
    fontFamily: 'MuseoSansRounded300',
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 15,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    width: '90%',
  },
  bottomText: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 20,
    fontFamily: 'MuseoSansRounded-500',
  },
});

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
