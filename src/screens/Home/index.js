import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Button} from '../../components';
import globalStyles from '../../config/globalStyles';
import styles from './styles';

const HomePage = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.pageTitle}>DESAFIO</Text>
      <View style={globalStyles.centralize}>
        <Text style={styles.text}>
          Abaixo há 4 perguntas que serão a chave para desvendar a senha, você
          pode utilizar o tradutor para descobrir cada parte da chave. Após
          descobrir vá até a primeira aba do aplicativo.
        </Text>
        <Text style={styles.question}>
          1 - A vontade é um sentimento que pode nos mover em direção a coisas
          boas e más. Porém, quando a vontade é rendida ao Senhor temos a
          certeza de andar na direção correta. A primeira parte da senha é a
          tradução literal da palavra "vontade" (Dica: não é desire).
        </Text>
        <Text style={styles.question}>
          2 - "Você" é uma palavra que se tornou especial depois que eu te
          conheci. Traduza para o inglês para encontrar a segunda parte da chave
          para desvendar a senha
        </Text>
        <Text style={styles.question}>
          3 - O casamento é algo criado pelo Senhor e portanto muito especial em
          qualquer lugar do mundo. A terceira parte da chave para desvendar a
          senha é o verbo "casar" no idioma mais falado no mundo.
        </Text>
        <Text style={styles.question}>
          4 - Creio que "Eu" tenha me tornado especial para você. Seu futuro
          esposo. A questão é que a última parte da senha é a tradução da
          palavra "Eu" no inglês.
        </Text>
        <View style={styles.safeBottomArea}>
          <Button title={'Good Luck'} onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;
