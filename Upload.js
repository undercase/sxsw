import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Image
} from 'react-native';

import styles from './styles';
import Button from './Button';

export default class Upload extends Component {
  render() {
    let image = (
      <View>
        <Text style={styles.header}>Set List Picture</Text>
        <Image style={styles.setlist} source={{uri: this.props.path}} />
      </View>
    );
    if (!this.props.path) {
      image = null;
    }
    return (
      <ScrollView style={styles.upload, styles.mainView}>
        {image}
        <Text style={styles.header}>Venue Information</Text>
        <TextInput style={styles.info} placeholder='Name' onChangeText={(text) => this.setState({text})} />
        <TextInput style={styles.info} placeholder='Capacity' onChangeText={(text) => this.setState({text})} />
        <TextInput style={styles.info} placeholder='Phone' onChangeText={(text) => this.setState({text})} />
        <TextInput style={styles.info} placeholder='Website' onChangeText={(text) => this.setState({text})} />
        <Text style={styles.header}>Promoter Information</Text>
        <TextInput style={styles.info} placeholder='Name' onChangeText={(text) => this.setState({text})} />
        <TextInput style={styles.info} placeholder='Street' onChangeText={(text) => this.setState({text})} />
        <TextInput style={styles.info} placeholder='City' onChangeText={(text) => this.setState({text})} />
        <TextInput style={styles.info} placeholder='Province' onChangeText={(text) => this.setState({text})} />
        <TextInput style={styles.info} placeholder='Postal Code' onChangeText={(text) => this.setState({text})} />
        <TextInput style={styles.info} placeholder='Country' onChangeText={(text) => this.setState({text})} />
        <TextInput style={styles.info} placeholder='Telephone' onChangeText={(text) => this.setState({text})} />
        <Button text="Submit" onPress={() => {}} />
      </ScrollView>
    );
  }
}
