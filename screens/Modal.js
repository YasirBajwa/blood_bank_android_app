import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const ModalPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
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
                   <TouchableOpacity style={styles.modal__section__content3__btn}>
                    <Text style={styles.modal__section__content3__btn__txt}>Sign in with Google</Text>
                   </TouchableOpacity>
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

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Hello World</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
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
      width:180,
      height:45,
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

export default ModalPage;