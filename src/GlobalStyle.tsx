import {StyleSheet} from 'react-native';

export const GlobalStyle = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    height: 64,
    padding: 16,
    alignItems: 'center',
  },
  titleBox: {
    marginStart: 16,
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
