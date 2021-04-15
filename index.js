/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Feather from 'react-native-vector-icons/Feather';
import App from './src/';

Feather.loadFont();
AppRegistry.registerComponent(appName, () => App);
