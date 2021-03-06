import React from 'react'
import {ScrollView,Text,StyleSheet,SafeAreaView,View,TextInput,Image,TouchableOpacity} from 'react-native'
import MyTabs from '../../navigations/bottomTab' 

export default function Consultants({navigation}){
    let specialistCards=[{
        title:"Allergy & Immunology"
    },
    {
        title:"Allergy & Immunology"
    },
    {
        title:"Allergy & Immunology"
    },
    {
        title:"Allergy & Immunology"
    },
    {
        title:"Allergy & Immunology"
    },
    {
        title:"Allergy & Immunology"
    }]

    let consultants=[{
        title:"Dr.John Doe",
        category:"Cardiologist",
        city:"New Delhi"
    },
    {
        title:"Dr.John Doe",
        category:"Cardiologist",
        city:"New Delhi"
    },
    {
        title:"Dr.John Doe",
        category:"Cardiologist",
        city:"New Delhi"
    },
    {
        title:"Dr.John Doe",
        category:"Cardiologist",
        city:"New Delhi"
    },
    {
        title:"Dr.John Doe",
        category:"Cardiologist",
        city:"New Delhi"
    },
    {
        title:"Dr.John Doe",
        category:"Cardiologist",
        city:"New Delhi"
    },
    {
        title:"Dr.John Doe",
        category:"Cardiologist",
        city:"New Delhi"
    }]

    return(
     <>
        <View style={styles.content}> 

            <View style={styles.inpContainer}>
                 <TextInput placeholder="Search by name,speciality and keyword" style={styles.input}/>
            </View>
        




        </View>

        <View style={styles.spec}>
            <Text style={styles.specialTxt}>Specialities</Text>
            <Text onPress={()=>{navigation.navigate("specialities")}}>View all</Text>
        </View>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={styles.horizontalCards}>
            {specialistCards.map((item)=>{
                return(
                    <TouchableOpacity onPress={()=>{navigation.navigate("specialities")}} style={styles.cards}>
                    
                    <Image
                 style={styles.docIcon}
                 source={require('../../../assets/icons/Image.png')}
               />
               <Text>
                  {item.title}
               </Text>
                    
                    </TouchableOpacity>
                )
            })}
           
        </ScrollView>

        <ScrollView contentContainerStyle={styles.rectCardsContainer}>
            {consultants.map((item)=>{
                return(
                    <TouchableOpacity onPress={()=>{navigation.navigate("home")}} style={styles.rectangularCard}>
                    <View style={styles.cardsContent}>
                      <Image
                         style={styles.consultantIcon}
                         source={require('../../../assets/icons/consultant_pic.png')}
                       />
                       </View>
                       <View style={styles.cardsContent}>
                           <Text>{item.title}</Text>
                           <Text style={styles.fontDr}>{item.category}</Text>
                           <Text style={styles.fontDr}>{item.city}</Text>
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