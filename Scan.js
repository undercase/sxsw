import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';

export default class Scan extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text>Scan</Text>
      </View>
    );
  }
}
