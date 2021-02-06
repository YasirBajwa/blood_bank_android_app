/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import store from './store/store';
import NavigationPage from './config/routes';
import ALertPage from './screens/AlertPage';
import UserPage from './screens/UserPage';

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationPage/>
           {/* <UserPage/> */}
      {/* <ALertPage/> */}
    </StoreProvider>
  )
}

