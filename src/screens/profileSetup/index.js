import React from 'react';
import {Text,TextInput,SafeAreaView,ScrollView,StyleSheet,View,Image} from 'react-native';
import {Container,Content} from 'native-base';
import InputBox from '../../components/input'
import Button from '../../components/button'


export default function ProfileSetup({navigation}){
    return(
        <ScrollView style={styles.content}>
        <SafeAreaView>
          <View style={styles.form}>
            <View style={styles.iconContainer}>
            <Image
        style={styles.docIcon}
        source={require('../../../assets/icons/ProfileFrame.png')}
      />
            </View>
            <View style={styles.headingContainer}>
            <Text style={styles.heading}>Welcome, John</Text>
            <Text style={styles.smallText}>Let's take a moment to setup your profile.</Text>
            </View>
            </View>

           <SafeAreaView style={styles.form}>
          
            <View style={styles.inputs}>
                <InputBox floatLabel="SPECIALITY"/>
            </View>
           
            <View style={styles.inputs}>
                <InputBox   floatLabel="DATE OF BIRTH"/>
            </View>

            <View style={styles.inputs}>
                <InputBox keyboardType="numeric"  floatLabel="EXPERIENCE (YEARS)"/>
            </View>

            <View style={styles.inputs}>
                <InputBox   floatLabel="MBBS REGISTRATION NUMBER"/>
            </View>

            <View style={styles.inputs}>
                <InputBox   floatLabel="CITY"/>
            </View>

            <View style={styles.inputs}>
                <InputBox keyboardType="numeric"  floatLabel="WHATSAPP"/>
            </View>

            <View style={styles.inputs}>
                <InputBox   floatLabel="ABOUT YOU"/>
            </View>

           
           

            <View style={styles.btnContainer}>
                <Button onPress={()=>{navigation.navigate("whatsApp")}} title='SUBMIT'/>
            </View>
            <View style={{height:30}}>

            </View>

            </SafeAreaView>
            

            </SafeAreaView>

            </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    content:{
       backgroundColor:"#F6F6F6",

    },
    heading:{
        fontSize:30,
        
    }, docIcon: {
        width: 110,
        height: 110,
      },
      iconContainer:{
          marginTop:10,
        //   marginLeft:20
      },
      headingContainer:{
          marginTop:10,
        //   marginLeft:20,
          alignItems:'center'

      },
      smallText:{
          color:'grey'
      },
      inputs:{
         
          width:350,
          marginTop:20
      },
      btnContainer:{
         
        width:350,
        marginTop:70
    },
      form:{
          alignItems:"center",
          marginTop:10,
      },
      boldTxt:{
          fontWeight:"bold"
      }

})