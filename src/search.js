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

type Props = {};
export default class Search extends Component<Props> {
  render() {
    return (
      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          backgroundColor: 'rgb(206,189,173)',
        }}
      >
        <TextInput
          style={{
            borderWidth: 10,
            borderColor: 'black',
            flex: 1,
            margin: 20,
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
    );
  }
}
