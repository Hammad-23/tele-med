import React from 'react'
import {SafeAreaView,TouchableOpacity,ScrollView,Text,View,Image,StyleSheet} from 'react-native'


 export default function Home(){
    return(
        <>
        <SafeAreaView style={{backgroundColor:"#00B7DD",height:170}}>

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


        </SafeAreaView>

        <View>
            <Text style={styles.appoinmentTxt}>Today's Appoinments (3)</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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
                    <Text>Dr. John Doe</Text>
                    <Text style={styles.docCatogry}>Cardiologist</Text>
                    <Text style={styles.timeDate}>15 August 2020, 10:30 AM - 11:00 AM</Text>
                </View>
            </View>
          </View>
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
        borderTopRightRadius:10
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
        marginTop:10
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
    }

})