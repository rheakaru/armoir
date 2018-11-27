/** @format */

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
firebase
  .auth()
  .signInAnonymously()
  .then(user => {
    console.warn(user.isAnonymous);
  });
import App from "./App.js";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import { Provider } from 'react-redux';

import configureStore from './app/components/aredux/Store.js';
const store = configureStore();

class ReduxProvider extends Component {
    render() {
        return(
            // <Provider> allows us to access the store for dispatching actions and receiving data from
            // the state in it's children i.e. <App/>
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => ReduxProvider);
