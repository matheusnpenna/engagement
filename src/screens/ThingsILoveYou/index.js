import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import globalStyles from '../../config/globalStyles';
import styles from './styles';
import ActionDispatcher from '../../components/ActionDispatcher';

const ThingsILovePage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSuccess = () => {};

  const onError = () => {};

  return (
    <View style={styles.container}>
      <Text style={globalStyles.pageTitle}>Coisas que eu amo em você</Text>
      <ActionDispatcher
        collection={'feed'}
        onSuccess={onSuccess}
        onError={onError}>
        {/* Colocar um carrossel só com as frases */}
        {/* Colocar um feed com as fotos, quando abre as fotos a frase aparece */}
      </ActionDispatcher>
    </View>
  );
};

export default ThingsILovePage;
