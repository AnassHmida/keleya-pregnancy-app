import {StyleSheet} from 'react-native';

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
});
