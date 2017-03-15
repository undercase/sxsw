import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
