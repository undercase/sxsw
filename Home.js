import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

class Button extends Component {
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

export default class Home extends Component {
  handlePress(name) {
    this.props.navigator.push({name: name});
  }
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.logo}>harmony</Text>
        <Button onPress={() => this.handlePress('Scan')} text="SCAN A SET LIST" />
        <Button onPress={() => this.handlePress('Upload')} text="ENTER AN EVENT" />
      </View>
    );
  }
}
