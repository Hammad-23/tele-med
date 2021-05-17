import React from "react"
import {SafeAreaView,TouchableOpacity,ScrollView,Text,View,Image,StyleSheet} from 'react-native'
import { color } from "react-native-reanimated"

import CustomButton from '../../components/button'

export default function ViewConsultant(){
    return(
        <>
             <View style={{backgroundColor:"#00B7DD",height:270}}>

<View style={styles.iconRow}>
    <View>
    <View style={styles.iconContainer}>
    <Image
             style={styles.consultantIcon}
             source={require('../../../assets/icons/doctorOffline.png')}
           />
           
    </View>
    <View style={styles.infoUser}>
        <View>
            <Text style={styles.userName} >
                John Doe
            </Text>
        </View>
        <View>
           <Text style={styles.date}>
              Cardiologist
           </Text>
        </View>
        <View>
           <Text style={styles.date}>
              New Delhi
           </Text>
        </View>
    </View>


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

<View>
 <CustomButton  title="Book Appoinment"/>
</View>

</View>



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
        justifyContent:"center",
        
        

    },
    iconContainer:{
        marginLeft:20
    },
    userName:{
        fontSize:18,
        color:"#FFFF",
        fontWeight:"bold"
    },
    date:{
        color:"#FFFF"
    },
    infoUser:{
        marginLeft:12,
        justifyContent:'center',
        alignItems:"center"
    },
    appoinmentsRow:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:10
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

})