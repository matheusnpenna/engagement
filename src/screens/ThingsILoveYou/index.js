import React, {useState, useContext} from 'react';
import {View, Text, SafeAreaView, FlatList, Dimensions} from 'react-native';

import {ActionDispatcher, FeedItem, ContentCarousel} from '../../components';
import globalStyles from '../../config/globalStyles';
import ApplicationContext from '../../context';
import styles from './styles';

const ThingsILovePage = () => {
  const [list, setList] = useState([]);
  const [verseList, setVerseList] = useState([]);
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
  const onSuccessVerses = docs => {
    const data = [];
    docs.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setVerseList(data);
  };

  const onError = error => {
    context.message.show('', '', 'success');
  };
  const onErrorVerses = error => {
    context.message.show('', '', 'success');
  };

  const renderItem = ({item}) => <FeedItem item={item} />;
  const renderVerseItem = ({item}) => (
    <View style={{...globalStyles.centralize, ...styles.header}}>
      <Text style={styles.verse}>{item.text}</Text>
      <Text style={styles.verse}>{item.reference}</Text>
    </View>
  );

  const _renderHeader = (
    <ActionDispatcher
      collection={'verses'}
      onSuccess={onSuccessVerses}
      onError={onErrorVerses}>
      <View style={globalStyles.centralize}>
        <Text style={globalStyles.pageTitle}>
          Casamento é um projeto de Deus
        </Text>
      </View>
      <ContentCarousel
        data={verseList}
        renderItem={renderVerseItem}
        sliderWidth={Dimensions.get('window').width}
        sliderHeight={200}
        itemWidth={300}
      />
      <View style={globalStyles.centralize}>
        <Text style={styles.cta}>
          Em cada imagem abaixo há coisas que eu amo em você!
        </Text>
      </View>
    </ActionDispatcher>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <ActionDispatcher
        collection={'feed'}
        onSuccess={onSuccess}
        onError={onError}>
        <FlatList
          data={list}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={_renderHeader}
        />
      </ActionDispatcher>
    </SafeAreaView>
  );
};

export default ThingsILovePage;
