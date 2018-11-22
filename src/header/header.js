import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Metrics from '../../assets/themes/Metrics';
import Armoir from './armoir';
import Cog from './cog';

export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.header}>
        <Armoir />
        <Cog />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: Metrics.navBarHeight,
    width: '100%',
  },
});
