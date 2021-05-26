import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const styles = StyleSheet.create({
  slide: {
    width: '100%',
  },
  title: {
    fontSize: 16,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#999',
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  dotContainer: {
    backgroundColor: 'transparent',
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
  const [activeSlide, setActiveSlide] = useState(0);

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
    <View>
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
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.dotContainer}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default ContentCarousel;
