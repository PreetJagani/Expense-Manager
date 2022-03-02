import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';

import MainScreen from './src/screens/MainScreen';

import {Provider} from 'react-redux';
import { store } from './src/reducers/Store';

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
