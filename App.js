/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Header from './src/header/header';
import Search from './src/search';
import Showing from './src/showing';
import Results from './src/results';
import Item from './src/item';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
      inputText: '',
      selectedFilter: '',
      selectedSortBy: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, width: '100%' }}>
        <Header />
          <View
              style={{
                  flex: 2,
                  flexDirection: 'column',
                  backgroundColor: 'rgb(206,189,173)',
              }}
          >
              <TextInput
                  style={{
                      flex: 1,
                      borderRadius: 10,
                      margin: 20,
                      backgroundColor: 'white'
                  }}
                  onChangeText={text => this.setState({ inputText: text })}
                  value={this.state.inputText}
              />
              <View
                  style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}
              >
                  <View style={{ flex: 1 }}>

                      {/*/!*<Picker*!/*/}
                      {/*selectedValue={this.state.selectedCategory}*/}
                      {/*onValueChange={itemValue =>*/}
                      {/*this.setState({ selectedCategory: itemValue })*/}
                      {/*}*/}

                      {/*>*/}
                      {/*<Picker.Item label="All" value="all" />*/}
                      {/*<Picker.Item label="Shirts" value="shirts" />*/}
                      {/*/!*</Picker>*!/*/}
                      <Text>category</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                      {/*<Picker*/}
                      {/*selectedValue={this.state.selectedFilter}*/}
                      {/*onValueChange={itemValue =>*/}
                      {/*this.setState({ selectedFilter: itemValue })*/}
                      {/*}*/}
                      {/*style={{ flex: 1 }}*/}
                      {/*>*/}
                      {/*<Picker.Item label="filter1" value="filter1" />*/}
                      {/*<Picker.Item label="filter2" value="filter2" />*/}
                      {/*</Picker>*/}
                      <Text>picker1</Text>
                      {/*<Picker*/}
                      {/*selectedValue={this.state.selectedSortBy}*/}
                      {/*onValueChange={itemValue =>*/}
                      {/*this.setState({ selectedSortBy: itemValue })*/}
                      {/*}*/}
                      {/*style={{ flex: 1 }}*/}
                      {/*>*/}
                      {/*<Picker.Item label="sortby1" value="sortby1" />*/}
                      {/*<Picker.Item label="sortby2" value="sortby2" />*/}
                      {/*</Picker>*/}
                      <Text>picker2</Text>
                  </View>
              </View>
          </View>
        <View style={{ flex: 5 }}>
          {this.state.inputText ? (
            <View>
              <Text> Showing: {this.state.inputText} </Text>
              <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                <Item
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
                  price={5}
                  distance={5}
                />
                <Item
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
                  price={5}
                  distance={5}
                />
                <Item
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
                  price={5}
                  distance={5}
                />
                <Item
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
                  price={5}
                  distance={5}
                />
              </View>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}
