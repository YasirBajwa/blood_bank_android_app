import React,{Component,useState,useEffect} from 'react';
import { StyleSheet,Button, ScrollView, View,Text,TouchableOpacity} from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import firebase from '../config/firebase';


const DonorForm = () =>{
 
  const [name, setName] = useState("");
  const [nameError,setNameError]=useState('')

  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMobileNumber, setErrorMobileNumber] = useState("");
  
  const [bloodUnit, setBloodUnit] = useState("");
  const [errorBloodUnit, setErrorBloodUnit] = useState("");
  
  const [address,setAdress] = useState('');
  const [errorAddress,setErrorAdress] = useState('');
  
  const [city, setCity] = useState("");
  const [errorCity, setErrorCity] = useState("");
  
  const [bloodType,setBloodType] = useState('');
  const [errorBloodType,setErrorBloodType] = useState('');



  const handleSubmit = (evt) => {
       evt.preventDefault();
       if (name === ''){
         setNameError('Name is required');
         return false;
       }
       else{
         setNameError('')
       }

       if (mobileNumber === ''){
        setErrorMobileNumber('Mobile Number is required');
        return false;
      }
      else{
        setErrorMobileNumber('')
      }
      if (bloodUnit === ''){
        setErrorBloodUnit('Blood Unit is required');
        return false;
      }
      else{
        setErrorBloodUnit('')
      }
      if (address === ''){
        setErrorAdress('Address is required');
        return false;
      }
      else{
        setErrorAdress('')
      }
      if (city === ''){
        setErrorCity('City is required');
        return false;
      }
      else{
        setErrorCity('')
      }
      if (bloodType === ''){
        setErrorBloodType('Blood Type is required');
        return false;
      }
      else{
        setErrorBloodType('')
      }
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
            <View><Text>{nameError}</Text></View>
            <Item floatingLabel last>
              <Label>Mobile Number</Label>
              <Input keyboardType={'numeric'} value={mobileNumber} onChangeText={text  => setMobileNumber(text)}  />
            </Item>
            <View><Text>{errorMobileNumber}</Text></View>
            <Item floatingLabel  last>
              <Label>Enter Your Blood group</Label>
              <Input  value={bloodType} onChangeText={text  => setBloodType(text)} />
            </Item>
            <View><Text>{errorBloodType}</Text></View>
            <Item floatingLabel last>
              <Label>Number of Blood Units</Label>
              <Input keyboardType={'numeric'} value={bloodUnit} onChangeText={text  => setBloodUnit(text)} />
            </Item>
            <View><Text>{errorBloodUnit}</Text></View>
            <Item floatingLabel last>
              <Label>Enter Your Address</Label>
              <Input value={address} onChangeText={text  => setAdress(text)}  />
            </Item>
            <View><Text>{errorAddress}</Text></View>
            <Item floatingLabel last>
              <Label  >Enter City</Label>
              <Input value={city} onChangeText={text  => setCity(text)} />
            </Item>
            <View><Text>{errorCity}</Text></View>
            <View style={styles.submit__btn__section}>
              <TouchableOpacity style={styles.submit__btn} onPress={ (e) => handleSubmit(e)}>
                <Text style={styles.submit__btn__txt}>SUBMIT</Text>
              </TouchableOpacity>
            {/* <Button style={styles.submit__btn} 
             title="submit" onPress={ (e) => handleSubmit(e)}/>  */}
            </View>
            <View style={{height:20}}>

            </View>
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
      submit__btn__section:{
        // marginTop:40,
      },
      submit__btn:{
          flex:1,
          width:'60%',
          height:40,
          alignSelf:'center',
          // marginTop: 10,
          backgroundColor:'green',
          justifyContent:'center',
          alignItems:'center',
          color:'white',
          fontSize:18,
      },
      submit__btn__txt:{
          color:'#fff',
          fontSize:18
      }
})
export default DonorForm;