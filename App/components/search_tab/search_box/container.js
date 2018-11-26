import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Colors from '../../../themes/Colors';
import Category from './Category';
import SortBy from './SortBy';
import Filters from './Filters';

type Props = {};
export default class SearchBox extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      category: '',
      sortyBy: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ inputText: text })}
          value={this.state.inputText}
        />
        <View style={styles.dropDowns}>
          <Category />
          <View>
            <Filters />
            <SortBy />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.theme,
    zIndex: 1,
  },
  textInput: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    width: 350,
    height: 75,
  },
  dropDowns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
