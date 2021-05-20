import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const styles = StyleSheet.create({
  slide: {
    width: '100%',
  },
  title: {
    fontSize: 16,
  },
});

const ContentCarousel = ({
  renderItem,
  data,
  sliderWidth,
  itemWidth,
  sliderHeight,
  itemHeight,
}) => {
  let _carousel;

  const _renderItem = ({item, index}) => {
    if (renderItem) {
      return renderItem({item});
    }
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <Carousel
      ref={c => {
        _carousel = c;
      }}
      data={data}
      renderItem={_renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      sliderHeight={sliderHeight}
      itemHeight={itemHeight}
    />
  );
};

export default ContentCarousel;
