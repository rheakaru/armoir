/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import ModalDropdown from '../../ModalDropDown';

const CATEGORY_OPTIONS = [
  { name: 'All' },
  { name: 'Shirts' },
  { name: 'Pants' },
  { name: 'Shorts' },
  { name: 'Dresses' },
  { name: 'Skirts' },
  { name: 'Outerwear' },
  { name: 'Shoes' },
  { name: 'Accessories' },
  { name: 'Other' },
];

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown_4_options: null,
      dropdown_4_defaultValue: 'loading...',
      dropdown_6_icon_heart: true,
    };
  }


  render(){
    return (
      <View >
        <ModalDropdown
          ref="dropdown_2"
          style={styles.dropdown_2}
          textStyle={styles.dropdown_2_text}
          dropdownStyle={styles.dropdown_2_dropdown}
          options={CATEGORY_OPTIONS}
          renderButtonText={rowData =>
            this._dropdown_2_renderButtonText(rowData)
          }
          renderRow={this._dropdown_2_renderRow.bind(this)}
          defaultValue="Category"
        />
      </View>
    );
  }

  _dropdown_2_renderButtonText(rowData) {
    const { name } = rowData;
    this.props.category = `${name}`;
    return `${name}`;
  }

  _dropdown_2_renderRow(rowData, rowID, highlighted) {
    return (
      <TouchableHighlight >
        <View
          style={[
            styles.dropdown_2_row,
            { backgroundColor: 'white' },
          ]}
        >
          <Text
            style={[
              styles.dropdown_2_row_text,
              highlighted && { fontWeight: 'bold' },
            ]}
          >
            {`${rowData.name} `}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdown_2: {
    alignSelf: 'center',
    width: 175,
    borderRadius: 5,
    backgroundColor: 'white',
      marginRight: 20,
  },
  dropdown_2_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    width: 175,
    height: 400,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: 'black',
    textAlignVertical: 'center',
  },
});
