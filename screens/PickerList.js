import React, { Component, } from 'react';
import { LogBox } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2';
 
class PickerList extends Component {
  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }
  render() {
    let data = [{
      value: 'A+',
    }, {
      value: 'B+',
    }, {
      value: 'Ab+',
    },
    , {
      value: 'O+',
    },
    {
      value:'O-'
    },
    {
      value: 'A-',
    }, {
      value: 'B-',
    }, {
      value: 'Ab-',
    }];
   
    return (
      <Dropdown
        label='Select Your Blood Group'
        data={data}
      />
    );
  }
}

export default PickerList;