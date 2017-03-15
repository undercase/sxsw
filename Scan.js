import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Camera from 'react-native-camera';

import styles from './styles';
import Button from './Button';

export default class Scan extends Component {
  handlePress(name, path) {
    this.props.navigator.push({name: name, path: path});
  }
  takePicture() {
    this.camera.capture()
      .then((data) => this.handlePress('Upload', data.path))
      .catch(err => console.error(err));
  }
  render() {
    return (
      <View style={styles.scan}>
        <Camera styles={styles.preview} ref={(cam) => {
          this.camera = cam;
        }} aspect={Camera.constants.Aspect.fill}>
          <View style={styles.actions}>
            <Button onPress={this.takePicture.bind(this)} text="CAPTURE SET LIST" />
          </View>
        </Camera>
      </View>
    );
  }
}
