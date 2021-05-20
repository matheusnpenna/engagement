import React, {useState, useContext} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';

import {ActionDispatcher, FeedItem} from '../../components';
import globalStyles from '../../config/globalStyles';
import ApplicationContext from '../../context';
import styles from './styles';

const ThingsILovePage = () => {
  const [list, setList] = useState([]);
  const context = useContext(ApplicationContext);

  const onSuccess = docs => {
    const data = [];
    docs.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setList(data);
  };

  const onError = error => {
    context.message.show('', '', 'success');
  };

  const renderItem = ({item}) => <FeedItem item={item} />;

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.centralize}>
        <Text style={globalStyles.pageTitle}>Coisas que eu amo em você</Text>
      </View>
      <ActionDispatcher
        collection={'feed'}
        onSuccess={onSuccess}
        onError={onError}>
        <FlatList
          data={list}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ActionDispatcher>
    </SafeAreaView>
  );
};

export default ThingsILovePage;
