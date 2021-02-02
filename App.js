/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DonorForm from './screens/Form';
import Home from './screens/Home';
import List from './screens/List';

const App = () => {
  return (
    <>
    <View style={{flex:1}}>
     {/* <Home/> */}
     {/* <List/> */}
     <DonorForm/>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
      header_style:{
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'green'
      }
});

export default App;
