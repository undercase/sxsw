import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './styles';
import Button from './Button';

export default class Home extends Component {
  handlePress(name) {
    this.props.navigator.push({name: name});
  }
  render() {
    return (
      <View style={styles.mainView, styles.home}>
        <Text style={styles.logo}>harmony</Text>
        <Button onPress={() => this.handlePress('Scan')} text="SCAN A SET LIST" />
        <Button onPress={() => this.handlePress('Upload')} text="ENTER AN EVENT" />
        <Text style={styles.heart}>made with <Text  style={styles.red}>❤</Text> by thomas & justin</Text>
      </View>
    );
  }
}
