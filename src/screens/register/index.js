import React from 'react';
import {Text,TextInput,SafeAreaView,ScrollView,StyleSheet,View,Image} from 'react-native';
import {Container,Content} from 'native-base';
import InputBox from '../../components/input'
import Button from '../../components/button'


export default function Register({navigation}){
    return(
        <ScrollView style={styles.content}>
        <SafeAreaView>
            <View style={styles.iconContainer}>
            <Image
        style={styles.docIcon}
        source={require('../../../assets/icons/doc.png')}
      />
            </View>
            <View style={styles.headingContainer}>
            <Text style={styles.heading}>Create Account</Text>
            <Text style={styles.smallText}>Please fill the form to create your account</Text>
            </View>

           <SafeAreaView style={styles.form}>
            <View style={styles.inputs}>
                <InputBox floatLabel="FULL NAME" />
            </View>
            <View style={styles.inputs}>
                <InputBox floatLabel="EMAIL ADRESS"/>
            </View>
            <View style={styles.inputs}>
                <InputBox keyboardType="numeric" floatLabel="MOBILE(optional)"/>
            </View>
            <View style={styles.inputs}>
                <InputBox secureTextEntry={true} floatLabel="PASSWORD"/>
            </View>
            <View style={styles.inputs}>
                <InputBox secureTextEntry={true} floatLabel="CONFIRM PASSWORD"/>
            </View>
            <View style={{marginTop:10}}>
                <Text>
                    By continuing, you agree all the <Text style={styles.boldTxt}> Terms & Conditions</Text>
                </Text>
            </View>

            <View style={styles.inputs}>
                <Button onPress={()=>{navigation.navigate("login")}} title='REGISTER'/>
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
        width: 60,
        height: 80,
      },
      iconContainer:{
          marginTop:30,
          marginLeft:20
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