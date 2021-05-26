import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
});

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
