import React, { Component,useState,useEffect } from 'react'  
import {  ActivityIndicator,AppRegistry,StyleSheet,Text,View,} from 'react-native'  
  
const  LoaderExample = () => {  
     const [ animating,setAnimate] =useState(true);  
      closeActivityIndicator = () => {
          setTimeout(
              () => setAnimate( false ),
              4000)
          }  
     useEffect( () =>{
        closeActivityIndicator()
    },[])  
        return (  
            <View style={styles.loader__container} >  
                <ActivityIndicator  animating = {animating} size="large" color="green" />  
            </View>  
        )  
    }  
  
  
const styles = StyleSheet.create({  
    loader__container: {  
        flex: 1,  
        justifyContent: 'center'  ,
        alignItems:'center'
    },  

})

export default LoaderExample;