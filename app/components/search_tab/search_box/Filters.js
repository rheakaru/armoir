import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './Mails';
const KEYS_TO_FILTERS = ['user.name'];

export default class Filters extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
  render() {
    const filteredEmails = emails.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS),
    );
    return (
      <View style={styles.container}>
        <View style={styles.filter}>
          <SearchInput
            onChangeText={term => {
              this.searchUpdated(term);
            }}
            style={styles.searchInput}
            placeholder="Filters"
            autoCapitalize="none"
          />
          <ScrollView style={styles.scroll}>
            {filteredEmails.map(email => {
              // if (this.state.searchTerm != '') {
              return (
                <TouchableOpacity
                  onPress={() => alert(email.user.name)}
                  key={email.id}
                  style={styles.emailItem}
                >
                  <View>
                    <Text>{email.user.name}</Text>
                  </View>
                </TouchableOpacity>
              );
              //  }
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 155,
  },
  filter: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderRadius: 5,
  },
  emailItem: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10,
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)',
  },
  searchInput: {
    padding: 10,
    borderColor: '#CCC',
    fontSize: 18,
    color: 'black',
  },
  scroll: {
    position: 'absolute',
    zIndex: 50000,
      backgroundColor: 'black'
  },
});
