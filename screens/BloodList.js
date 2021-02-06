

import React,{useState,useEffect} from 'react';
import {StyleSheet, ScrollView, View,TouchableOpacity,Alert,Modal} from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
// import {set_data} from '../store/action/action'
import firebase from '../config/firebase';
import { GoogleSignin,GoogleSigninButton,statusCodes,} 
from '@react-native-community/google-signin';
import {product_page} from '../store/action/action'










const BloodList = ({navigation:{navigate}},props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [testUser,setTest] = useState(false);
  let [firebaseData,setFirebaseData] = useState([]);

  console.log('Redux Reducer data===>',props.users)
 
  useEffect( () =>{
    const arr = []
    firebase.database().ref('/').child(`users/donor_data`).on('child_added', (data)=>{
      arr.push(data.val())
      setFirebaseData(arr);
    })
  },[])

  useEffect( () =>{
    GoogleSignin.configure({
        webClientId: '588072920222-ous99p8hl6etdhjuv1ocs7rffe1r3r9a.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      });
},[])


let signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
      // console.log('user===>',userInfo); 
      setTest(true); 
      setModalVisible(!modalVisible);
      // console.log('modal is off now');
       createAlert();
   
    }
   catch (error) {
      console.log('error==>',error);
  }
}
const createAlert = () => {
    Alert.alert(
      "User Status",
      "You have sucsessfully Login ",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  //  () => navigation('DetailPage')

}

  return (
    <ScrollView > 
     <View >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modal__section}>
               <View style={styles.modal__section__content1}>
                 <Icon name="alert-circle" size={60} style={{color:'orange'}}/>
                   </View>
                   <View style={styles.modal__section__content2}>
                    <Text>You need to login to view the donor details</Text>

                   </View>
                   <View style={styles.modal__section__content3}>
                   <View style={styles.modal__section__content3__btn}>
                   <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn}
                    // onPress={ () => navigate('UserPage')}
                   />
                    
                   </View>
                   </View>
                   

                   <View style={styles.modal__section__content4}>
                   <TouchableOpacity style={styles.modal__section__content4__btn}
                     onPress={() => {
                     setModalVisible(!modalVisible);
                     }}>
                    <Text style={styles.modal__section__content4__btn__txt}>CANCEL</Text>
                   </TouchableOpacity>
                   </View>
                    </View>
          </View>
        </View>
      </Modal>
    </View>
{/* End of Modal */}
    <View style={{flex:1}} >
    <View style={{flex:1}}>
      <View style={styles.header__title}>
        <Text style={styles.header__title__text}> SAYALNI BLOOD BANK</Text>
      </View>
    </View>
     <View >
       {/* <TouchableOpacity onPress={() => alert('call your function here')}> */}
       <Text style={styles.blood__card__title}>List of All Blood Groups</Text>
      
      {/* </TouchableOpacity> */}
     </View>
    {
      firebaseData && Object.values(firebaseData).map( (data,index) =>{
            //  user__data[name,email] = data
            return <View style={styles.blood__card__section} key={index} 
                 
            >
              {/* onStartShouldSetResponder={() => props.set_data()} */}
            <Card style={styles.blood__card__box}
               
      
            >
              <CardItem style={styles.blood__card__box__header} header>
               <View style={styles.blood__card__box__header__c1}>
               <View>
               <Icon name="person" style={styles.blood__card__box__icon} size={40}/>
               </View>
               <View>
                   <Text style={styles.blood__card__box__user__name}> {data.name}</Text>
               </View>
               </View>
               <View style={styles.blood__card__box__header__c2}>
                    <Text style={styles.blood__card__box__header__c2__txt}>{data.bloodType}</Text>
               </View>
             </CardItem>
             <CardItem style={styles.blood__card__box__body}> 
               <Body>
                 <View style={styles.blood__card__box__body__wrapper}>
                 <View style={styles.blood__card__box__body__c1}>
                     <View style={styles.blood__card__box__body__c1__1}>
                         <Icon name="home" size={30}/>
                         <Text style={styles.blood__card__box__body__c1__1__txt}>{data.address}</Text>
 
                     </View>
                     <View style={styles.blood__card__box__body__c1__2}>
                     <Icon name="location" size={30}/>
                         <Text  style={styles.blood__card__box__body__c1__2__txt}>{data.city}</Text>
                     </View>
                 </View>
                 {
                   testUser === false ?  <View style={styles.blood__card__box__body__c2}>
                   <Icon style={styles.blood__card__box__body__c2__icon} name="call" size={40}
                       onPress={() => {
                       setModalVisible(true);
               }
               }
                   />
 
                  </View>
                   :
                 <View style={styles.blood__card__box__body__c2}>
                  <Icon style={styles.blood__card__box__body__c2__icon} name="call" size={40}
                      onPress={() => {
                      //  () => props.product_page(data),
                       navigate('UserPage',{name:'Yasir Bajwa',email:'bajwa@gmail.com',data:data})
                      ;
              }
              }
                  />

                 </View>
      }
                 </View>
               </Body>
             </CardItem>
            
          </Card>
          
      </View>
      
      }
      )}
     
     
     
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
  blood__card__title:{
    fontSize:18,
    marginTop:25,
    textAlign:'center',
    color:'green',
    fontWeight:'bold'
  },
  blood__card__section:{
      flex:5,
      height:220,
      marginTop:10
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
      flexDirection:'row',
      maxWidth:'80%',
      // maxHeight:200
      // overflow:'hidden'
  }
  ,blood__card__box__body__c1__2:{
    flex:1,
    flexDirection:'row',
    marginTop:25
}
,blood__card__box__body__c2:{
    flex:1,
    justifyContent:'flex-end',
    flexDirection:'row'
    
}
,blood__card__box__body__wrapper:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
},
blood__card__box__body__c1__1__txt:{
  marginTop:5,
  marginLeft:5
},
blood__card__box__body__c1__2__txt:{
  marginTop:5
},
blood__card__box__body__c2__icon:{
  
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  // width:'300px',
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  width:300,
  height:300,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
},
modal__section:{
    flex:1,
    alignItems:'center'
},
modal__section__content3:{
    marginTop:25
},
modal__section__content3__btn:{
    
    alignItems:'center',
    justifyContent:'center',
    
},
modal__section__content3__btn__txt:{
    color:'white',
},
modal__section__content4:{
    marginTop:20
},
modal__section__content4__btn:{
  width:120,
  height:35,
  backgroundColor:'#2196F3',
  alignItems:'center',
  justifyContent:'center',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 1.84,
  elevation: 3
},
modal__section__content4__btn__txt:{
  color:'white',
}
});

const mapStateToProps= (state) =>({
    users: state.users,
})

const mapDispatchToProps= (dispatch) =>({
  product_page: (data) => dispatch(product_page(data)) 
})

export default connect(mapStateToProps,mapDispatchToProps)( BloodList);
