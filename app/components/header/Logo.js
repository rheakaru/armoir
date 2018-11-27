import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fonts } from '../../../src/utils/Fonts';

type Props = {};
export default class Logo extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.armoir}>armoir</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  armoir: {
    fontSize: 40,
    fontFamily: Fonts.Prociono,
  },
});
