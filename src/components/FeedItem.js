import React, {useMemo} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
import screens from '../screens';

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    margin: 1,
    height: 120,
  },
  media: {
    height: 120,
  },
});

const FeedItem = ({item, navigation}) => {
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
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  }, [item]);

  const onPressItem = () => {
    navigation.navigate(screens.free.thingDetails.name, {item});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.wrapper}
      onPress={onPressItem}>
      {renderContent}
    </TouchableOpacity>
  );
};

export default FeedItem;
