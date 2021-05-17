import React from 'react'
import {ScrollView,Text,StyleSheet,SafeAreaView,View,TextInput,Image,TouchableOpacity} from 'react-native'
import MyTabs from '../../navigations/bottomTab' 

export default function Specialities({navigation}){
   
    let consultants=[{
        title:"Cardiology",
        quantity:"12 consultants"
    },
    {
        title:"Cardiology",
        quantity:"12 consultants"
    },
    {
        title:"Cardiology",
        quantity:"12 consultants"
    },
    {
        title:"Cardiology",
        quantity:"12 consultants"
    },
    {
        title:"Cardiology",
        quantity:"12 consultants"
    },
    {
        title:"Cardiology",
        quantity:"12 consultants"
    },
    {
        title:"Cardiology",
        quantity:"12 consultants"
    },
    ]

    return(
     <>
        <View style={styles.content}> 
            <View style={styles.inpContainer}>
                 <TextInput placeholder="Search by name,speciality and keyword" style={styles.input}/>
            </View>
        </View>
        <ScrollView contentContainerStyle={styles.rectCardsContainer}>
            {consultants.map((item)=>{
                return(
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("cardiology")
                    }} style={styles.rectangularCard}>
                    <View style={styles.cardsContent}>
                      <Image
                         style={styles.consultantIcon}
                         source={require('../../../assets/icons/Image.png')}
                       />
                       </View>
                       <View style={styles.cardsContent}>
                           <Text>{item.title}</Text>
                           <Text style={styles.fontDr}>{item.quantity}</Text>
                          
                       </View>
                    </TouchableOpacity>
                )
            })}
            
        </ScrollView>

        {/* <MyTabs/> */}
     
       </>

    )
}

const styles = StyleSheet.create({
    content:{
       backgroundColor:"#F6F6F6",

    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor:"#F2F2F2",
        backgroundColor:"#F2F2F2",
        borderRadius:18
    },
    inpContainer:{
        backgroundColor:"#00B7DD"
    },
     docIcon: {
        width: 80,
        height: 60,
      },
      cards:{
          height:170,
          width:90,
          backgroundColor:"#FFFFFF",
          justifyContent:"center",
          alignItems:"center",
          marginLeft:10
      },
      spec:{
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
          width:335,
          marginLeft:10
      },
      specialTxt:{
          fontSize:18
      },
      horizontalCards:{
          marginTop:10,
          
          flexDirection:"row",
          justifyContent:'space-around',
          alignItems:'center'
      },
      rectangularCard:{
          backgroundColor:"#FFFFFF",
          width:335,
          height:100,
          marginTop:10,
          flexDirection:"row",
          alignItems:"center"
          
      },
      rectCardsContainer:{
          alignItems:'center',
         
      },
      consultantIcon:{
          height:60,
          width:60
      },
      cardsContent:{
          marginLeft:10
      },
      fontDr:{
          fontSize:10,
          color:"grey"
      }
    

})