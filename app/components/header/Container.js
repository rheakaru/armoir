import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Metrics from '../../themes/Metrics';
import Logo from './Logo';
import Cog from './Cog';

export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Cog />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: Metrics.navBarHeight,
    width: '100%',
  },
});
