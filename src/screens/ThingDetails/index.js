import React, {useState, useContext} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {MediaView} from '../../components';
import globalStyles from '../../config/globalStyles';
import ApplicationContext from '../../context';
import styles from './styles';

const ThingDetailsPage = ({route, navigation}) => {
  const item = route.params?.item || {picture: '', media_type: 'image'};
  const context = useContext(ApplicationContext);

  return (
    <View style={globalStyles.container}>
      <MediaView
        src={item.picture}
        type={item.media_type}
        style={styles.media}
      />
      <View style={styles.divider} />
      <View style={globalStyles.row}>
        <Feather
          name={'heart'}
          size={22}
          color={'black'}
          style={globalStyles.marginRight1}
        />
        <Feather name={'send'} size={22} color={'black'} />
      </View>
      <View style={styles.divider} />
      <Text style={[styles.likeWrapper, globalStyles.marginBottom1]}>
        Curtido por <Text style={styles.likePerson}>Deus</Text> e{' '}
        <Text style={styles.likePerson}>outros</Text>
      </Text>
      <Text style={[styles.likePerson, globalStyles.marginBottom1]}>
        _matheuspenna
      </Text>
      <View style={globalStyles.centralize}>
        <Text style={styles.title}>{item.text}</Text>
        {item.longText ? (
          <Text style={styles.text}>{item.longText}</Text>
        ) : (
          false
        )}
        <Text style={styles.iLoveYou}>AMO VOCÊ</Text>
        <Feather name={'heart'} size={80} color={'red'} />
      </View>
    </View>
  );
};

export default ThingDetailsPage;
