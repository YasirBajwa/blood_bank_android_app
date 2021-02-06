import React, {useState, useEffect} from 'react';
import {StyleSheet,  View,TouchableOpacity, Alert,Modal,Text} from 'react-native';
import { GoogleSignin,GoogleSigninButton,statusCodes,} 
from '@react-native-community/google-signin';



const SignIn = () => {
    useEffect( () =>{
        GoogleSignin.configure({
            webClientId: '588072920222-ous99p8hl6etdhjuv1ocs7rffe1r3r9a.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
          });
    },[])

signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
        //   this.setState({ userInfo });
        console.log('userinfo==>',userInfo)
        } catch (error) {
            console.log('error==>',error);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };

  return (
    <View style={styles.conatiner}>
      <Text>Sign In</Text>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
     />
    </View>
  );
};

const styles= StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default SignIn;