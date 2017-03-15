import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Camera from 'react-native-camera';

import styles from './styles';
import Button from './Button';

export default class Scan extends Component {
  render() {
    return (
      <View style={styles.scan}>
        <Camera styles={styles.preview} ref={(cam) => {
          this.camera = cam;
        }} aspect={Camera.constants.Aspect.fill}>
          <View style={styles.actions}>
          </View>
        </Camera>
      </View>
    );
  }
}
