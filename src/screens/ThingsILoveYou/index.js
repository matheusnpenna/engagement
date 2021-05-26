import React, {useState, useMemo, useContext, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';

import {
  ActionDispatcher,
  FeedItem,
  ContentCarousel,
  Button,
} from '../../components';
import globalStyles from '../../config/globalStyles';
import ApplicationContext from '../../context';
import {IMAGES} from '../../assets';
import styles from './styles';

const PAGINATION_LIMIT = 20;

const ThingsILovePage = ({navigation}) => {
  const [password, onChangePassword] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [list, setList] = useState([]);
  const [verseList, setVerseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const {message} = useContext(ApplicationContext);

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

  const attemptUnlock = () => {
    if (!password.length) {
      message.show('Digite a senha!', '', 'error');
      return;
    }

    if (password.trim().toLowerCase() === 'doyoumarryme') {
      setShowContent(true);
    } else {
      message.show('Senha Incorreta!', '', 'error');
    }
  };

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
    message.show('Atenção', error, 'error');
  };
  const onErrorVerses = error => {
    message.show('Atenção', error, 'error');
  };

  const _onRefresh = async () => {
    const response = await firestore().collection('feed').get();
    onSuccess(response);
  };

  const updateOffset = () => {
    setOffset(offset + 10);
  };

  const _loadMore = async () => {
    setLoading(true);
    const response = await firestore()
      .collection('feed')
      .orderBy('text')
      .startAt(offset)
      .limit(PAGINATION_LIMIT)
      .get();
    onSuccess(response);
    setLoading(false);
  };

  useEffect(() => {
    _loadMore(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const renderItem = ({item}) => (
    <FeedItem item={item} navigation={navigation} />
  );

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
      <View style={[globalStyles.row, globalStyles.padding1]}>
        <View style={[globalStyles.centralize, globalStyles.marginRight1]}>
          <Image source={IMAGES.profile} style={styles.profileImg} />
          <Text style={globalStyles.profileName}>Matheus Penna</Text>
        </View>
        <View style={[globalStyles.row, globalStyles.between]}>
          <View style={globalStyles.centralize}>
            <Text style={styles.insightsNumber}>{list.length}</Text>
            <Text style={styles.insightsLegend}>Posts</Text>
          </View>
          <View
            style={[globalStyles.centralize, globalStyles.marginHorizontal2]}>
            <Text style={styles.insightsNumber}>Infinitas</Text>
            <Text style={styles.insightsLegend}>Coisas</Text>
          </View>
          <View style={globalStyles.centralize}>
            <Text style={styles.insightsNumber}>Todos</Text>
            <Text style={styles.insightsLegend}>Dias para te amar</Text>
          </View>
        </View>
      </View>
      <ContentCarousel
        data={verseList}
        renderItem={renderVerseItem}
        sliderWidth={Dimensions.get('window').width}
        firstItem={4}
        sliderHeight={100}
        itemWidth={330}
      />
      <View style={globalStyles.centralize}>
        <Text style={styles.cta}>
          Em cada imagem abaixo há algo que amo em você!
        </Text>
      </View>
    </ActionDispatcher>
  );

  const content = useMemo(() => {
    if (!showContent) {
      return (
        <View style={styles.authWrapper}>
          <Text style={styles.label}>
            Digite a senha descoberta no desafio para acessar e descobrir coisas
            que eu amo em você
          </Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            onChangeText={e => onChangePassword(e)}
            value={password}
          />
          <View style={styles.btnWrapper}>
            <Button title={'ENTRAR'} onPress={attemptUnlock} />
          </View>
        </View>
      );
    }
    return (
      <ActionDispatcher
        style={globalStyles.centralize}
        limit={PAGINATION_LIMIT}
        collection={'feed'}
        onSuccess={onSuccess}
        onError={onError}>
        <FlatList
          data={list}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshing={loading}
          onRefresh={_onRefresh}
          ListHeaderComponent={_renderHeader}
          removeClippedSubviews
          onEndReachedThreshold={0}
          onEndReached={updateOffset}
        />
      </ActionDispatcher>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showContent, password, verseList]);

  return (
    <SafeAreaView
      style={{...globalStyles.container, ...globalStyles.centralize}}>
      {content}
    </SafeAreaView>
  );
};

export default ThingsILovePage;
