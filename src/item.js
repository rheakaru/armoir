/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

type Props = {};
export default class Item extends Component<Props> {
  render() {
    return (
      <View style={{width: "50%", height: 100}}>
        <Image style={{width: "100%", height: 60}} source={{uri: this.props.image}}/>
        <Text> {this.props.price} </Text>
        <Text> {this.props.distance} </Text>
      </View>
    );
  }
}

Item.propTypes = { name: PropTypes.string.isRequired };
Item.defaultProps = { name: 'default' };
