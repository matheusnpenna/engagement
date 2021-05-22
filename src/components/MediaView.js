import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
const localStyles = StyleSheet.create({
  loadingView: {
    minHeight: 300,
  },
});

const MediaView = ({src, style, type}) => {
  const [loading, setLoading] = useState(false);

  if (type === 'video') {
    return (
      <View style={localStyles.loadingView}>
        {loading && <ActivityIndicator animating size="small" color="black" />}
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
