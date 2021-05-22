import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
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
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
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
  between: {
    justifyContent: 'space-between',
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
  marginHorizontal1: {
    marginHorizontal: 10,
  },
  marginHorizontal2: {
    marginHorizontal: 15,
  },
  padding1: {
    padding: 10,
  },
});
