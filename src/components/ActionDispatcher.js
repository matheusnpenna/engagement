import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ActionDispatcher = ({
  children,
  style = {},
  limit = 50,
  collection,
  onSuccess,
  onError,
}) => {
  const [loading, setLoading] = useState(false);

  const fetchData = async function (collectionName, success, reject) {
    try {
      setLoading(true);
      const response = await firestore().collection(collectionName).get();
      setLoading(false);
      success(response);
    } catch (error) {
      reject(error);
    }
  };

  useEffect(() => {
    fetchData(collection, onSuccess, onError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={style}>
      {loading ? (
        <ActivityIndicator animating size="small" color="black" />
      ) : (
        children
      )}
    </View>
  );
};

export default ActionDispatcher;
