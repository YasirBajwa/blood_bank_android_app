

import React from 'react';
import {  SafeAreaView,StyleSheet,Image, ScrollView, View,Text,  StatusBar,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon2 from 'react-native-vector-icons/FontAwesome';

const List = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <View style={styles.header__title}>
        <Text style={styles.header__title__text}> SAYALNI BLOOD BANK</Text>
      </View>
      <View style={styles.list__section}>
           <View style={styles.list__section__item1}>

           <View style={styles.list__section__item1__content1}>
               <View>
                   <Icon 
                    onPress={() => navigation.navigate('BloodList')}
                   name="man" size={80}/>
               </View>
               <View>
                  <Text  style={styles.list__section__item1__content1__txt}
                    title="Go to Card"
                    onPress={() => navigation.navigate('BloodList')}
                  > Find Blood </Text>
                   </View>

           </View>
           <View style={styles.list__section__item1__content2}>
               <View style={styles.list__section__item1__content2__icon}>
                   <Icon
                   onPress={() => navigation.navigate('Form')}
                   name="add-circle" size={80}/>
               </View>
               <View>
                  <Text style={styles.list__section__item1__content2__txt}
                   title="Go to Card"
                   onPress={() => navigation.navigate('Form')}
                  > Become Donor </Text>
                   </View>

           </View>
             
            </View>
          
          <View style={styles.list__section__item2}>
              
          <View style={styles.list__section__item1__content1}>
               <View>
                   <Icon name="home" size={80}/>
               </View>
               <View>
                  <Text style={styles.list__section__item1__content1__txt}> Blood Banks </Text>
                   </View>

           </View>
           <View style={styles.list__section__item1__content1}>
               <View>
                   <Icon name="battery-full" size={80}/>
               </View>
               <View>
                  <Text style={styles.list__section__item1__content1__txt}> Blood Match </Text>
                   </View>

           </View>
          </View>
         
          <View style={styles.list__section__item3}>
              
              <View style={styles.list__section__item1__content1}>
                   <View>
                       <Icon name="share-social" size={80}/>
                   </View>
                   <View>
                      <Text style={styles.list__section__item1__content1__txt}> Share App </Text>
                       </View>
    
               </View>
               <View style={styles.list__section__item1__content1}>
                   <View>
                       <Icon name="call" size={80}/>
                   </View>
                   <View>
                      <Text style={styles.list__section__item1__content1__txt}> Contact Us </Text>
                       </View>
    
               </View>
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
  list__section:{
      flex:5,
      backgroundColor:'lightgrey'
  },
  list__section__item1:{
     flex:1,
     flexDirection:'row',
     justifyContent:'space-around',
     marginTop:30
  },
  list__section__item1__content1__txt:{
      color:'green',
      fontSize:18
  },
  list__section__item1__content2__txt:{
    color:'green',
    fontSize:18
},
list__section__item1__content2__icon:{
    marginLeft:20
},
list__section__item2:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
 },
 list__section__item3:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
 },
});

export default List;
