import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  wrapper: {
    margin: 5,
    height: 120,
    width: 120,
  },
  media: {
    height: 120,
    width: 120,
  },
});

const FeedItem = ({item}) => {
  const renderContent = useMemo(() => {
    if (item.media_type === 'video') {
      return (
        <Video
          source={{uri: item.picture}}
          resizeMode={'cover'}
          volume={0.0}
          onError={error => console.log(error)}
          style={styles.media}
        />
      );
    }

    return (
      <FastImage
        key={item.id}
        style={styles.media}
        source={{uri: item.picture}}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  }, [item]);

  return <View style={styles.wrapper}>{renderContent}</View>;
};

export default FeedItem;
