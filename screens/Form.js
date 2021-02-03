import React,{Component} from 'react';
import {  SafeAreaView,StyleSheet,Image, ScrollView, View,Text,  StatusBar,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content,Button, Form, Item, Input, Label } from 'native-base';
import PickerList from './PickerList';
const DonorForm = () =>{

     return(
         <ScrollView>
         <View style={{flex:1}}>
             <View style={styles.header__title}>
             <Text style={styles.header__title__text}> SAYALNI BLOOD BANK</Text>
            </View>
            <View style={styles.form__section}>
                 <View style={styles.form__section__item1}>
                     <Text style={styles.form__section__item1__txt}>Fill the form and become blood donor</Text>
                 </View>
        <View style={styles.form__section__item2}>
          <Form style={styles.form__section__input}>
            <Item floatingLabel  last>
              <Label>Full Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Mobile Number</Label>
              <Input keyboardType={'number-pad'} />
            </Item>
            <PickerList/>
            <Item floatingLabel last>
              <Label>Number of Blood Units</Label>
              <Input keyboardType={'numeric'}/>
            </Item>
            <Item floatingLabel last>
              <Label>Enter City</Label>
              <Input />
            </Item>
            <Button style={styles.submit__btn} success><Text style={styles.submit__btn__txt}> SUBMIT </Text></Button>
          </Form>
      </View>

      </View>

         </View>
         </ScrollView>
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
      },
      form__section__input:{
        flex:1,
        alignContent:'center',
        alignSelf:'center',
        width:'90%'
        
                         
      },
      submit__btn:{
          flex:1,
          width:150,
          height:50,
          alignSelf:'center',
          marginTop: 30,
          backgroundColor:'green',
          justifyContent:'center'
      },
      submit__btn__txt:{
          color:'#fff',
          fontSize:18
      }
})
export default DonorForm;