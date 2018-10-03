import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import List from './application/components/ListComponent';
import Slide from './application/components/SliderComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Slide />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  }
})