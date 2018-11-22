import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Metrics from '../../assets/themes/Metrics';
import { Fonts } from '../utils/Fonts';

type Props = {};
export default class Armoir extends Component<Props> {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.armoir}>armoir</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  armoir: {
    fontSize: 40,
    fontFamily: Fonts.Prociono,
  },
});
