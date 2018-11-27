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
import Header from '../header/Container';
import Item from './results/Item';
import firebase from 'react-native-firebase';
import SearchBox from "./search_box/Container";
import Results from "./results/Container";

type Props = {};
export default class SearchTab extends Component<Props> {

    render() {
        const items_ref = firebase.database().ref("items");

        return (
            <SafeAreaView style={styles.container}>
                <Header />
                <SearchBox />
                <Results />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
});
