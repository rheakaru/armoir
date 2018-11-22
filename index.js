/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import firebase from 'react-native-firebase';
firebase
  .auth()
  .signInAnonymously()
  .then(user => {
    console.warn(user.isAnonymous);
  });
AppRegistry.registerComponent(appName, () => App);
