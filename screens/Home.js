

import React from 'react';
import {  SafeAreaView,StyleSheet,Image, ScrollView, View,Text,  StatusBar,} from 'react-native';
import LogoImage from '../asset/images/sayalani-logo.png'

const Home = () => {
  return (
    
    <View style={{flex:1}}>
      <View style={styles.header__title}>
        <Text style={styles.header__title__text}> SAYALNI BLOOD BANK</Text>
      </View>
       <View style={styles.header__title__section}>
             <View>
                    <Image source={LogoImage} style={styles.logo__img}/>
               </View>  

               <View>
                 <Text style={styles.donate__blood}>DONATE BLOOD</Text>
               </View>
               <View>
                 <Text style={styles.blood__opt}>OR</Text>
               </View>
               <View>
                 <Text style={styles.find__blood}>FIND BLOOD DONOR</Text>
               </View>
      </View> 
      
    </View>
  );
};

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
  header__title__section:{
    flex:5,
    backgroundColor:'lightgray',
    alignItems:'center',
  },
  logo__img:{
      width:300,
      height:300,
      resizeMode:'contain'
  }
 ,donate__blood:{
   color:'green',
   fontSize:30,
 },
 find__blood:{
  color:'green',
  fontSize:30,
 },
 blood__opt:{
  fontSize:22,

 }
});

export default Home;
