import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput, Text,
} from 'react-native';
import Item from "./Item";

type Props = {};
export default class SearchBox extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            inputText: 'RESULTS',
            category: '',
            sortyBy: '',
        };
    }
    render() {
        return (
            <View style={styles.container}>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});