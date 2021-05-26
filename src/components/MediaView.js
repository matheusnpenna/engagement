import React, {useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
const localStyles = StyleSheet.create({
  loadingView: {
    position: 'relative',
    minHeight: 300,
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

const MediaView = ({src, style, type}) => {
  const [loading, setLoading] = useState(false);

  if (type === 'video') {
    return (
      <View style={localStyles.loadingView}>
        {loading && (
          <View style={localStyles.loading}>
            <ActivityIndicator animating size="small" color="black" />
          </View>
        )}
        <Video
          volume={0.0}
          style={style}
          source={{uri: src}}
          resizeMode={'cover'}
          onError={error => console.log(error)}
          onLoadStart={() => {
            setLoading(true);
          }}
          onLoad={() => {
            setLoading(false);
          }}
        />
      </View>
    );
  }

  return (
    <FastImage
      key={'media-img'}
      style={style}
      source={{uri: src}}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default MediaView;
