import React, {useState, useContext} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {MediaView} from '../../components';
import {IMAGES} from '../../assets';
import globalStyles from '../../config/globalStyles';
import ApplicationContext from '../../context';
import styles from './styles';

const ThingDetailsPage = ({route, navigation}) => {
  const item = route.params?.item || {picture: '', media_type: 'image'};
  const context = useContext(ApplicationContext);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.row}>
        <Image source={IMAGES.profile} style={styles.profileImg} />
        <Text style={[styles.likePerson, globalStyles.marginBottom1]}>
          _matheuspenna
        </Text>
      </View>
      <View style={styles.divider} />
      <MediaView
        src={item.picture}
        type={item.media_type}
        style={styles.media}
      />
      <View style={styles.divider} />
      <View style={[globalStyles.row, globalStyles.marginBottom1]}>
        <View style={[globalStyles.flex1, globalStyles.row]}>
          <Feather
            name={'heart'}
            size={22}
            color={'black'}
            style={globalStyles.marginRight1}
          />
          <Feather name={'send'} size={22} color={'black'} />
        </View>
        <Feather name={'bookmark'} size={22} color={'black'} />
      </View>
      <Text style={[styles.likeWrapper, globalStyles.marginBottom1]}>
        Curtido por <Text style={styles.likePerson}>Deus</Text> e{' '}
        <Text style={styles.likePerson}>outros</Text>
      </Text>
      <Text style={[styles.likePerson, globalStyles.marginBottom1]}>
        _matheuspenna <Text style={styles.legend}>{item.text}</Text>
      </Text>
      <View style={globalStyles.centralize}>
        <Text style={styles.iLoveYou}>AMO VOCÊ</Text>
        <Feather name={'heart'} size={40} color={'red'} />
      </View>
    </View>
  );
};

export default ThingDetailsPage;
