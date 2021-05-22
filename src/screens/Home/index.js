import React from 'react';
import {Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {Button} from '../../components';
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
      <View style={globalStyles.centralize}>
        <Text style={styles.text}>
          Preparei 3 desafios simples para você, após completa-los, você
          desbloqueará um endereço.
        </Text>
        <Button title={'PRIMEIRO DESAFIO'} onPress={() => {}} />
      </View>
    </View>
  );
};

export default HomePage;
