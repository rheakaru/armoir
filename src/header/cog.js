import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Metrics from '../../assets/themes/Metrics';

type Props = {};
export default class Cog extends Component<Props> {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          source={require('../../assets/images/cog.png')}
          style={styles.cog}
          resizeMode="contain"
          hidd
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
      flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cog: {
    height: Metrics.icons.medium,
    width: Metrics.icons.medium,
  },
});
