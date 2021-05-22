import React from 'react';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';

const MediaView = ({src, style, type}) => {
  if (type === 'video') {
    return (
      <Video
        source={{uri: src}}
        resizeMode={'cover'}
        volume={0.0}
        onError={error => console.log(error)}
        style={style}
      />
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
