import React from 'react';
import {Text,TextInput,SafeAreaView,ScrollView,StyleSheet,View,Image} from 'react-native';
import {Container,Content} from 'native-base';
import InputBox from '../../components/input'
import Button from '../../components/button'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AwesomeAlert from 'react-native-awesome-alerts';
import { useState } from 'react';
import { color } from 'react-native-reanimated';


export default function EmailVerification({navigation}){

    const [show,setShow]=useState(false);

    showAlert = () => {
      setShow(true)
      };

      hideAlert = () => {
       setShow(false)
      };


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
            <Text style={styles.heading}>Verify Your Email.</Text>
            <Text style={styles.smallText}>A 4 digit code has been sent to your email. Please check your email and enter the code below. </Text>
            </View>

           <SafeAreaView style={styles.form}>
          
            <View style={styles.inputs}>
            <OTPInputView style={{width: '80%', height: 200}}
            
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled = {(code => {
                showAlert();
               

            })}
            pinCount={4} />
            </View>

            <AwesomeAlert
                alertContainerStyle={{width:350}}
                
                show={show}
                showProgress={false}
                title="Congratulations!"
                message="You are successfully Registered with us. Now let us take a moment to create your profile "
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                // cancelText={false}
                confirmText="CONTINUE"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                  hideAlert();
                }}
                onConfirmPressed={() => {
                  hideAlert();
                  navigation.navigate("login")
                }}
                confirmButtonColor="#00B7DD"
                
                confirmButtonStyle={{borderRadius:25,width:250,justifyContent:"center",alignItems:"center",height:40}}
              />
           
           
           
           

            <View style={styles.inputs}>
                <Button onPress={()=>{navigation.navigate("login")}} title='VERIFY'/>
            </View>
            <View style={{marginTop:20}}>
                <Text>Did'nt Recieved code? <Text style={styles.boldTxt}>Resend</Text> </Text>
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
          marginTop:40,
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
         
          width:350,
          marginTop:20,
          justifyContent:'center',
          alignItems:'center'
      },
      form:{
          alignItems:"center",
          marginTop:10,
      },
      boldTxt:{
          fontWeight:"bold"
      },
      borderStyleBase: {
        width: 50,
        height: 45,
       
      },
     
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
        
      },
     
      underlineStyleBase: {
        width: 60,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 2,
      },
     
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
        color:"black",
        fontSize:20
      },

})