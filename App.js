/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';

import { Header, LearnMoreLinks, Colors, DebugInstructions,
 ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Provider as StoreProvider} from 'react-redux';
import store from './store/store';
import NavigationPage from './config/routes';
import Loader from './screens/Loader';

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationPage/>
    </StoreProvider>
  )
}

