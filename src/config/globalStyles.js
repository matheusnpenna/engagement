import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7d7d7d',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7d7d7d',
  },
  centralize: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  marginBottom1: {
    marginBottom: 10,
  },
  marginRight1: {
    marginRight: 10,
  },
});
