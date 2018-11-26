import React, { Component } from 'react';
import {
    Text,
    Button
} from 'react-native';

export default class Redux extends Component {
    render() {
        return (
            // this.props.count comes from the Redux state
            <Text>{this.props.count}</Text>

            // This.props.addToCounter() is a function to update the counter
            <Button onPress={() => this.props.addToCounter()}>
        Click Me!
        </Button>
    )
    }
}

// This function provides a means of sending actions so that data in the Redux store
// can be modified. In this example, calling this.props.addToCounter() will now dispatch
// (send) an action so that the reducer can update the Redux state.
function mapDispatchToProps(dispatch) {
    return {
        addToCounter: () => dispatch(addToCounter())
    }
}

// This function provides access to data in the Redux state in the React component
// In this example, the value of this.props.count will now always have the same value
// As the count value in the Redux state
function mapStateToProps(state) {
    return {
        count: state.count
    }
}
