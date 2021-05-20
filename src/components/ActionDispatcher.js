import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ActionDispatcher = ({children, collection, onSuccess, onError}) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    firestore()
      .collection(collection)
      .get()
      .then(onSuccess)
      .catch(onError)
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator animating size="small" color="red" />
      ) : (
        children
      )}
    </View>
  );
};

export default ActionDispatcher;
