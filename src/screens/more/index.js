import React from 'react'
import {Text,View,Image,ScrollView,TouchableOpacity,StyleSheet} from 'react-native'



export default function More(){
    let boxes=[{
        title:'My Account'
    },
    {
        title:'Change Password'
    },
    {
        title:'Patients'
    },
    {
        title:'Payment Details'
    },
    {
        title:'Financial Report'
    },
    {
        title:'Appoinment Reminder'
    },
    {
        title:'Popup Reminder'
    },
    {
        title:'About'
    },
    {
        title:'Privacy Policy'
    },
    {
        title:'Terms & Conditions'
    },
    {
        title:"FAQ's"
    },
    {
        title:'Help & Support'
    },
    {
        title:'Rate Us'
    }]
    return(
        <>
        <ScrollView contentContainerStyle={styles.full}>

            <View style={{marginTop:10}}>

        {boxes.map((item)=>{
           return(

            <TouchableOpacity style={styles.rectangleBox}>

            <View>

               <Text style={{marginLeft:10}}>
                  {item.title}
               </Text>
            </View>

            <View >

               <Image style={{height:15,width:10,marginRight:10}} source={require('../../../assets/icons/greater.png')}/>

            </View>

           </TouchableOpacity>




           )
        })  

    }

</View>

        </ScrollView>







        </>
    )
}

const styles = StyleSheet.create({
    content: {
      backgroundColor: '#F6F6F6',
    },
    rectangleBox:{
        backgroundColor:'#FFFF',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        width:335,
        height:54,
        marginTop:10
    },
    full:{
        alignItems:"center"
    }

})