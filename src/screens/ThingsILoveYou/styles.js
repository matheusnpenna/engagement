import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    height: 220,
  },
  verse: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'italic',
  },
  cta: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7d7d7d',
    textAlign: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 10,
    marginBottom: 10,
  },
  insightsNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  insightsLegend: {
    fontSize: 12,
    color: 'black',
  },
});
