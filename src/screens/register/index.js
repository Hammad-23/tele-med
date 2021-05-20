import React, { useState } from 'react';
import {Text,TextInput,SafeAreaView,ScrollView,StyleSheet,View,Image} from 'react-native';
import {Container,Content} from 'native-base';
import InputBox from '../../components/input'
import Button from '../../components/button'
import axios from 'axios'


export default function Register({navigation}){
    const [fullname,setFullname]=useState('')
    const [email,setEmail]=useState('')
    const [mobileNo,setMobile]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPass,setConfirm]=useState('')

    const register=()=>{

        // console.log(fullname)
        // console.log(email)
        // console.log(mobileNo)
        // console.log(password)
        if(password===confirmPass){
            axios.get(`https://telemed.websitebnao.online/public/consultant/register?name=${fullname}&&email=${email}&&password=${password}&&confirmPassword=${confirmPass}`)
      .then((res)=>{
          console.log('response-->',res)
         navigation.navigate("verification")
      }).catch((e)=>{
         console.log(e)
      })
        }else{
            alert("Both Passwords are not matched")
        }
        

     


    }


    return(
        <ScrollView style={styles.content}>
        <SafeAreaView>
            <View style={styles.iconContainer}>
            <Image
        style={styles.docIcon}
        source={require('../../../assets/icons/doctor.png')}
      />
            </View>
            <View style={styles.headingContainer}>
            <Text style={styles.heading}>Create Account</Text>
            <Text style={styles.smallText}>Please fill the form to create your account</Text>
            </View>

           <SafeAreaView style={styles.form}>
            <View style={styles.inputs}>
                <InputBox onChangeText={(text) => setFullname(text)} floatLabel="FULL NAME" />
            </View>
            <View style={styles.inputs}>
                <InputBox onChangeText={(text) => setEmail(text)} floatLabel="EMAIL ADRESS"/>
            </View>
            <View style={styles.inputs}>
                <InputBox onChangeText={(text) => setMobile(text)} keyboardType="numeric" floatLabel="MOBILE(optional)"/>
            </View>
            <View style={styles.inputs}>
                <InputBox onChangeText={(text) => setPassword(text)} secureTextEntry={true} floatLabel="PASSWORD"/>
            </View>
            <View style={styles.inputs}>
                <InputBox onChangeText={(text) => setConfirm(text)} secureTextEntry={true} floatLabel="CONFIRM PASSWORD"/>
            </View>
            <View style={{marginTop:10,width:310}}>
                <Text>
                    By continuing, you agree all the <Text style={styles.boldTxt}> Terms & Conditions</Text>
                </Text>
            </View>

            <View style={styles.inputs}>
                <Button onPress={register} title='REGISTER'/>
            </View>
            <View>
                <Text>Existing Doctor? <Text style={styles.boldTxt}>Login</Text></Text>
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
        width: 120,
        height: 80,
      },
      iconContainer:{
          marginTop:30,
        //   marginLeft:20
      },
      headingContainer:{
          marginTop:10,
          marginLeft:20
      },
      smallText:{
          color:'grey'
      },
      inputs:{
         
          width:310,
          marginTop:20
      },
      form:{
          alignItems:"center",
          marginTop:10,
      },
      boldTxt:{
          fontWeight:"bold"
      }

})