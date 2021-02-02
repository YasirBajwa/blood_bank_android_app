import React,{Component} from 'react';
import {  SafeAreaView,StyleSheet,Image, ScrollView, View,Text,  StatusBar,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import PickerList from './PickerList';
const DonorForm = () =>{

     return(
         <View style={{flex:1}}>
             <View style={styles.header__title}>
             <Text style={styles.header__title__text}> SAYALNI BLOOD BANK</Text>
            </View>
            <View style={styles.form__section}>
                 <View style={styles.form__section__item1}>
                     <Text style={styles.form__section__item1__txt}>Fill the form and become blood donor</Text>
                 </View>
        <View style={styles.form__section__item2}>
          <Form>
            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Mobile Number</Label>
              <Input />
            </Item>
            <PickerList/>
            
          </Form>
      </View>

      </View>

         </View>
     )
}
const styles = StyleSheet.create({
    header__title:{
        flex:1,
        height:60,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
      },
      header__title__text:{
        color:'white',
        fontSize:25
      },
      form__section:{
          flex:5,
      },
      form__section__item1__txt:{
          textAlign:'center',
          marginTop:30,
          color:'green',
          fontSize:16
      },
      form__section__item1:{
        //   flex:1
      },
      form__section__item2:{
            // flex:
      }
})
export default DonorForm;