import React,{Component,useState,useEffect} from 'react';
import { StyleSheet,Button, ScrollView, View,Text} from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import firebase from '../config/firebase';


const DonorForm = () =>{
 
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [bloodUnit, setBloodUnit] = useState("");
  const [address,setAdress] = useState('');
  const [city, setCity] = useState("");
  const [bloodType,setBloodType] = useState('');



  const handleSubmit = (evt) => {
       evt.preventDefault();
      let donor_data = {
         name,
         mobileNumber,
         bloodUnit,
         address,
         city,
         bloodType,
      }
      firebase.database().ref('/').child(`users/donor_data`).push(donor_data)
      .then(()=>{
        alert('Your Form has been submitted Sucessfully');
       setName('');
       setMobileNumber('');
       setAdress('');
       setCity('');
       setBloodUnit('');
       setBloodType('');
      
       
    }).catch(function(error) {
      var errorMessage = error.message;
      alert('Sorry Your form could not be submitted',errorMessage)
    
    });
}


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
              <Input  value={name} onChangeText={text  => setName(text)} />
            </Item>
            <Item floatingLabel last>
              <Label>Mobile Number</Label>
              <Input keyboardType={'numeric'} value={mobileNumber} onChangeText={text  => setMobileNumber(text)}  />
            </Item>
            <Item floatingLabel  last>
              <Label>Enter Your Blood group</Label>
              <Input  value={bloodType} onChangeText={text  => setBloodType(text)} />
            </Item>
            <Item floatingLabel last>
              <Label>Number of Blood Units</Label>
              <Input keyboardType={'numeric'} value={bloodUnit} onChangeText={text  => setBloodUnit(text)} />
            </Item>
            <Item floatingLabel last>
              <Label>Enter Your Address</Label>
              <Input value={address} onChangeText={text  => setAdress(text)}  />
            </Item>
            <Item floatingLabel last>
              <Label  >Enter City</Label>
              <Input value={city} onChangeText={text  => setCity(text)} />
            </Item>
            <Button style={styles.submit__btn} title="submit" onPress={ (e) => handleSubmit(e)}/>
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
          justifyContent:'center',
          color:'white',
          fontSize:18,
          marginTop:20
      },
      submit__btn__txt:{
          color:'#fff',
          fontSize:18
      }
})
export default DonorForm;