import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import {StyleSheet,Image, ScrollView, View,  StatusBar,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CardHeaderFooterExample extends Component {
  render() {
    return (
          <View style={{flex:1}}>
                <View style={styles.card__section}>
                     <Text>Hello</Text>
                </View>

          </View>
    );
  }
}

const styles = StyleSheet.create({
    card__section:{
        flex:1,
        width:'90%',
        height:200,
        shadowColor: "#000",
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 3,
    }
    ,
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
    blood__card__section:{
        flex:5,
        // height:170
    },
    blood__card__box:{
      flex:1,
      alignContent:'center',
      alignSelf:'center',
      width:'90%'
    },
    blood__card__box__header:{
      flex:1,
      backgroundColor:'green',
      justifyContent:'space-between'
  },
    blood__card__box__header__c1:{
        flex:1,
        flexDirection:'row'
    },
   
    blood__card__box__header__c2__txt:{
        color:'white'
    }
  
    ,blood__card__box__body:{
        flex:5
    },
    blood__card__box__icon:{
        color:'white'
    },
    blood__card__box__user__name:{
        color:'white',
        marginTop:5
    }
    ,blood__card__box__body__c1__1:{
        flex:1,
        flexDirection:'row'
    }
    ,blood__card__box__body__c1__2:{
      flex:1,
      flexDirection:'row'
  }
  ,blood__card__box__body__c2:{
      // flex:1,
      // flexDirection
  }
  ,blood__card__box__body__wrapper:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between'
  },
  
  });