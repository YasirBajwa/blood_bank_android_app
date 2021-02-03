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
import BloodList from './screens/BloodList';
import DonorForm from './screens/Form';
import Home from './screens/Home';
import List from './screens/List';
import {Provider as StoreProvider} from 'react-redux';
import store from './store/store';
import NavigationPage from './config/routes';


export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationPage/>
    </StoreProvider>
  )
}

