import React from 'react'
import {SafeAreaView,TouchableOpacity,ScrollView,Text,View,Image,StyleSheet} from 'react-native'


 export default function Home(){
     let todaysAppoinments=[{
         name:"Dr. John Doe",
         category: "Cardiologist",
         timmings:"15 August 2020, 10:30 AM - 11:00 AM"
     },
     {
        name:"Dr. John Doe",
        category: "Cardiologist",
        timmings:"15 August 2020, 10:30 AM - 11:00 AM"
    },{
        name:"Dr. John Doe",
        category: "Cardiologist",
        timmings:"15 August 2020, 10:30 AM - 11:00 AM"
    },{
        name:"Dr. John Doe",
        category: "Cardiologist",
        timmings:"15 August 2020, 10:30 AM - 11:00 AM"
    },{
        name:"Dr. John Doe",
        category: "Cardiologist",
        timmings:"15 August 2020, 10:30 AM - 11:00 AM"
    }]
    return(
        <>
        <View style={{backgroundColor:"#00B7DD",height:170}}>

            <View style={styles.iconRow}>
                <View style={styles.iconContainer}>
                <Image
                         style={styles.consultantIcon}
                         source={require('../../../assets/icons/doctorOffline.png')}
                       />
                       
                </View>
                <View style={styles.infoUser}>
                       <Text style={styles.userName}>
                           Hi,John!
                       </Text>
                       <Text style={styles.date}>
                           Monday,25 March 2020
                       </Text>
                </View>


            </View>

            <View style={styles.appoinmentsRow}>
                <View style={styles.inside}>
                    <Text style={styles.num}>23</Text>
                    <Text style={styles.txt}>Appoinments</Text>
                    <Text style={styles.txt}>(As Consultants)</Text>
                </View>
                <View style={styles.inside}>
                    <Text style={styles.num}>12</Text>
                    <Text style={styles.txt}>Appoinments</Text>
                    <Text style={styles.txt}>(As Doctor)</Text>
                </View>
                <View style={styles.inside}>
                    <Text style={styles.num}>$230K</Text>
                    <Text style={styles.txt}>Total</Text>
                    <Text style={styles.txt}>Earnings</Text>
                </View>
            </View>


        </View>

        <View>
            <Text style={styles.appoinmentTxt}>Today's Appoinments (3)</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        {todaysAppoinments.map((item)=>{
            return(

               
          <View style={styles.appoinmentCards}>
            <View style={styles.tagRow}>
              <View style={styles.tag}>
               <Text style={styles.tagText}>As Doctor</Text>
              </View>
            </View>
            <View style={styles.doctorInfo}>
                <View>
                    <Image
                         style={styles.consultantIcon2}
                         source={require('../../../assets/icons/consultant_pic.png')}
                       />
                </View>
                <View style={{marginLeft:10}}>
                    <Text>{item.name}</Text>
                    <Text style={styles.docCatogry}>{item.category}</Text>
                    <Text style={styles.timeDate}>{item.timmings}</Text>
                </View>
            </View>
            <View style={styles.btnsContainer}>
                <TouchableOpacity style={styles.callBtn}>
                <Image
                         style={styles.btnIcon}
                         source={require('../../../assets/icons/videoIcon.png')}
                       />
                    <Text style={styles.btnTextColor}>
                      VIDEO CALL
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.callBtn2}>
                <Image
                         style={styles.btnIconaudio}
                         source={require('../../../assets/icons/audioIcon.png')}
                       />
                    <Text style={styles.btnTextColor}>
                        PHONE CALL
                    </Text>
                </TouchableOpacity>


            </View>
          </View>
        

            )
        })}
        </ScrollView>
        






        </>
    )
}

const styles = StyleSheet.create({
    content:{
       backgroundColor:"#F6F6F6",

    },
    consultantIcon:{
        height:60,
        width:60
    },
    consultantIcon2:{
        height:50,
        width:50
    },
   
    iconRow:{
        backgroundColor:"#00B7DD",
        flexDirection:"row",

    },
    iconContainer:{
        marginLeft:20
    },
    userName:{
        fontSize:25,
        color:"#FFFF",
        fontWeight:"bold"
    },
    date:{
        color:"#FFFF"
    },
    infoUser:{
        marginLeft:10
    },
    appoinmentsRow:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:20
    },
    inside:{
        alignItems:"center",
        // borderRightWidth:0.5,
        // borderRightColor:"grey"
    },
    num:{
        fontSize:25,
        color:"#FFFF",
        fontWeight:"bold"
    },
    txt:{
        color:"#FFFF"
    },
    appoinmentTxt:{
        fontSize:20,
        marginTop:10,
        marginLeft:10
    },
    tag:{
        backgroundColor:"#003C75",
        height:20,
        width:76,
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:6
    },
    tagText:{
        fontSize:13,
        color:"#FFFF"
    },
    tagRow:{
        flexDirection:"row",
        justifyContent:"flex-end",
        // width:300
    },
    scrollContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    appoinmentCards:{
        backgroundColor:"#FFFF",
        width:335,
        height:147,
        marginTop:10,
        borderRadius:4
    },
    doctorInfo:{
        flexDirection:"row",
        marginLeft:10
    },
    timeDate:{
        fontSize:12,
        color:"#003C75",
        fontWeight:"bold"
    },
    docCatogry:{
        fontSize:12,
        color:"grey"
    },
    callBtn:{
        borderWidth:1,
        borderColor:"#003C75",
        borderRadius:15,
        width:118,
        height:30,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    callBtn2:{
        borderWidth:1,
        borderColor:"#003C75",
        borderRadius:15,
        width:118,
        height:30,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginLeft:10
    },
    btnIcon:{
        width:18,
        height:11.34
    },
    btnTextColor:{
        color:"#003C75"
    },
    btnIconaudio:{
        width:10.76,
        height:18
    },
    btnsContainer:{
        flexDirection:"row",
        marginTop:20,
        marginLeft:10
    }

})