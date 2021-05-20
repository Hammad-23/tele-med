import React from 'react';
import {Text,TextInput,SafeAreaView,ScrollView,StyleSheet,View,Image} from 'react-native';
import {Container,Content} from 'native-base';
import InputBox from '../../components/input'
import Button from '../../components/button'


export default function LogIn({navigation}){
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
            <Text style={styles.heading}>Lets Log you in.</Text>
            <Text style={styles.smallText}>Welcome back Doctor, You've been missed.</Text>
            </View>

           <SafeAreaView style={styles.form}>
          
            <View style={styles.inputs}>
               
               
                <InputBox floatLabel="EMAIL ADRESS"/>
                
            </View>
           
            <View style={styles.inputs}>
                <InputBox secureTextEntry={true} floatLabel="PASSWORD"/>
            </View>
           
           

            <View style={styles.inputs}>
                <Button onPress={()=>{navigation.navigate("home")}} title='Log In'/>
            </View>
            <View style={{marginTop:20}}>
                <Text>Forgot Password? </Text>
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
         
          width:310,
          marginTop:20,
          
      },
      inputsdemo:{
         
        width:310,
        marginTop:20,
       
        
        
    },
      form:{
          alignItems:"center",
          marginTop:10,
      },
      boldTxt:{
          fontWeight:"bold"
      }

})