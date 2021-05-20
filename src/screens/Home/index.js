import React from 'react';
import {Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import globalStyles from '../../config/globalStyles';
import styles from './styles';

const HomePage = () => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  requestUserPermission();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.pageTitle}>DESAFIO</Text>
    </View>
  );
};

export default HomePage;
