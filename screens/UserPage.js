

import React,{useState,useEffect} from 'react';
import {StyleSheet, ScrollView, View,TouchableOpacity,Alert,Modal} from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';


const UserPage = ({ route, navigation }) => {
  const { name,email,data } = route.params;
  // console.log('User Page data from BloodPage',props.data);
  console.log('name===>',name)
  console.log('email===>',email);
  console.log('data==>',data);
      // props.product_data;  
  return (
    <ScrollView > 
    <View style={{flex:1}} >
    <View style={{flex:1}}>
      <View style={styles.header__title}>
        <Text style={styles.header__title__text}> SAYALNI BLOOD BANK</Text>
      </View>
    </View>
    <View style={styles.blood__user__section}>
      <View>
        <Text style={{alignItems:'center',marginTop:30}}>Blood Group is : {data.bloodType} </Text>
      </View>
      <View style={styles.blood__user__section__box}>

        <View style={styles.blood__user__section__1}>
             <Text style={styles.blood__user__section__1__txt}>Name: {data.name}</Text>
        </View>
        <View style={styles.blood__user__section__2}>
             <Text style={styles.blood__user__section__2__txt}>Mobile Number: {data.mobileNumber}</Text>
        </View>
        <View style={styles.blood__user__section__3}>
             <Text style={styles.blood__user__section__3__txt}>address: {data.address}</Text>
        </View>
        <View style={styles.blood__user__section__4}>
             <Text style={styles.blood__user__section__4__txt}>City: {data.city}</Text>
        </View>
        <View style={styles.blood__user__section__5}>
             <Text style={styles.blood__user__section__5__txt}>Number of Blood Units: {data.bloodUnit}</Text>
        </View>
        </View>
    </View>
    
    </View>   
    </ScrollView>
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
  blood__user__section:{
    flex:1,
    alignItems:'center'
  },
  blood__user__section__box:{

    width:'90%',
    height:250,
    padding:30,
    marginTop:60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      borderBottomWidth:1,
      borderBottomColor:'#000',
      elevation: 2,

  }
  
  ,blood__user__section__2 :{
    marginTop:10
  }
  ,blood__user__section__3 :{
    marginTop:10
  }
  ,blood__user__section__4 :{
    marginTop:10
  }
  ,blood__user__section__5 :{
    marginTop:10
  }
  ,blood__user__section__5__txt:{
  }
  // End of StyleSheet
});


const mapStateToProps = (state) => {
  return {
      product_data : state.product_data,
      new_user : state.user,
  }
}


const mapDispatchToProps = (dispatch) =>{
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserPage)
