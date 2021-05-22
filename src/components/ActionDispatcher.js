import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ActionDispatcher = ({
  children,
  style = {},
  collection,
  onSuccess,
  onError,
}) => {
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
  }, []);

  return (
    <View style={style}>
      {loading ? (
        <ActivityIndicator animating size="small" color="red" />
      ) : (
        children
      )}
    </View>
  );
};

export default ActionDispatcher;
