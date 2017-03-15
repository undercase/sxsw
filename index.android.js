import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import styles from './styles';
import Home from './Home';
import Scan from './Scan';
import Upload from './Upload';


class MainNavigator extends Component {
  renderScene(route, navigator) {
    if (route.name === 'Home') {
      return <Home navigator={navigator} />;
    } else if (route.name === 'Scan') {
      return <Scan navigator={navigator} />;
    } else if (route.name === 'Upload') {
      return <Upload path={route.path} navigator={navigator} />;
    }
  }
  render() {
    return (
      <Navigator style={styles.navigator} initialRoute={{name: 'Home'}} renderScene={this.renderScene} />
    );
  }
}

export default class sxsw extends Component {
  render() {
    return <MainNavigator />;
  }
}

AppRegistry.registerComponent('sxsw', () => sxsw);
