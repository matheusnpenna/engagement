import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const ActionDispatcher = ({children, collection, onSuccess, onError}) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    firestore()
      .collection(collection)
      .get()
      .then(docs => {
        const data = [];
        docs.forEach(doc => {
          data.push(doc.data());
        });
        onSuccess(data);
      })
      .catch(error => onError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [loading, collection, onSuccess, onError]);

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" color="red" /> : children}
    </View>
  );
};

export default ActionDispatcher;
