import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import styles from './styles';

export default class Upload extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Image style={styles.previewImage} source={{uri: this.props.path}} />
      </View>
    );
  }
}
