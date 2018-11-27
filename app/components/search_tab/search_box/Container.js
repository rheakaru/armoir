import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Colors from '../../../themes/Colors';
import Category from './Category';
import SortBy from './SortBy';
import Filters from './Filters';
import { connect } from 'react-redux';
import { updateSearch } from "../../../modules/Actions";


type Props = {};
class SearchBox extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      sortyBy: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.props.updateSearch(text)}
          value={this.props.searchText}
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

function mapStateToProps(state) {
    return {
        searchText: state.searchText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateSearch: () => dispatch(updateSearch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
