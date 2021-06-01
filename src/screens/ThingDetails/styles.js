import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  media: {
    height: 300,
    marginVertical: 10,
  },
  legend: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#7d7d7d',
    textAlign: 'justify',
    paddingHorizontal: 15,
    marginBottom: 35,
  },
  iLoveYou: {
    fontSize: 45,
    color: '#7d7d7d',
    fontWeight: 'bold',
    textAlign: 'justify',
    paddingTop: 55,
  },
  mediaArea: {
    position: 'relative',
    paddingVertical: 5,
  },
  dividerTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#99999980',
    marginVertical: 10,
  },
  dividerBottom: {
    position: 'absolute',
    bottom: 0,
    height: 1,
    width: '100%',
    backgroundColor: '#99999980',
    marginVertical: 10,
  },
  likeWrapper: {
    fontSize: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
