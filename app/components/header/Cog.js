import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Metrics from '../../themes/Metrics';
import Images from '../../themes/Images';

type Props = {};
export default class Cog extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={Images.cog}
          style={styles.cog}
          resizeMode="contain"
          hidd
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
