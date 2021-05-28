import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {color} from 'react-native-reanimated';
import axios from 'axios'
import {path} from '../../config/path'

import CustomButton from '../../components/button';

export default function ViewConsultant({navigation,route}) {

  let userObj={
    fee:'',
    completion: '',
    experience:'',
    about:'',
    services:'',
    experiences:'',
    registrations:''
  }

  useEffect(async ()=>{
    
    await axios.get(`${path.PROFILE_API}?user_id=${route.params.item.id}`)
    .then((res)=>{
      console.log('profile response--> ',res.data.data.profile.services)
    }).catch((e)=>{
      console.log('profile error--> ',e);
    })

  },[])


  // console.log('name--> ',route.params.item);

   
  let info = {
    name: route.params.item.title,
    category: route.params.item.category,
    city: route.params.item.city,
  };
  return (
    <>
      <View style={{backgroundColor: '#00B7DD', height: 290}}>
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
                <Text style={styles.userName}>{info.name}</Text>
              </View>
              <View>
                <Text style={styles.date}>{info.category}</Text>
              </View>
              <View>
                <Text style={styles.date}>{info.city}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.appoinmentsRow}>
          <View style={styles.inside}>
            <Text style={styles.num}>23</Text>
            <Text style={styles.txt}>Experience</Text>
            <Text style={styles.txt}>(Years)</Text>
          </View>
          <View style={styles.inside}>
            <Text style={styles.num}>12</Text>
            <Text style={styles.txt}>Consultations</Text>
            <Text style={styles.txt}>(completed)</Text>
          </View>
          <View style={styles.inside}>
            <Text style={styles.num}>$1000</Text>
            <Text style={styles.txt}>Consultation</Text>
            <Text style={styles.txt}>fee</Text>
          </View>
        </View>

        <View style={styles.btnContain}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtbtn}>BOOK APPOINMENTS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.about}>
        <View style={styles.txtContainer}>
          <Text style={styles.txtHeading}>About</Text>
          <Text style={styles.paraTxt}>
            Dr. John Doe, DM cardiology(Gold Medalist) is one of the senior
            interventional cardiologists. He is highly competent, learned &
            skilled cardiologist & is a pioneer of radial angiography and has
            done more than 9000 cardiac procedures till 2016. He is expert in
            radial angioplasty & stent placement & pacemaker implantations. He
            is also a consulting cardiologist & echocardiologist.
          </Text>
        </View>

        <View style={styles.txtContainer2}>
          <Text style={styles.txtHeading}>Services</Text>
          <Text style={styles.paraTxt}>• Cardiac Catheterisation</Text>
          <Text style={styles.paraTxt2}>
            • Implantable Cardioverter-Defibrillators (Icds)
          </Text>
          <Text style={styles.paraTxt2}>
            • Patent Ductus Artriosus Device Closure
          </Text>
          <Text style={styles.paraTxt2}>• Non-Invasive Cardiology</Text>
          <Text style={styles.paraTxt2}>• Peripheral Interventions</Text>
          <Text style={styles.paraTxt2}>• Mitral/Heart Valve Replacement</Text>
          <Text style={styles.paraTxt2}>• ASD / VSD Device Closure</Text>
          <Text style={styles.paraTxt2}>• Cardiac Invasive Procedures</Text>
          <Text style={styles.paraTxt2}>• Balloon Mitral Valvuloplasty</Text>
          <Text style={styles.paraTxt2}>• Peripheral Vascular Disease</Text>
        </View>

        <View style={styles.txtContainer3}>
          <Text style={styles.txtHeading}>Experience</Text>
          <Text style={styles.paraTxt}>
            • 2009 - 2010 Interventional & Consultant cardiologist at Escorts
            Arneja Heart Institute
          </Text>
          <Text style={styles.paraTxt}>
            • 2009 - 2009 Post DM Residency in Cardiology at Post Graduate
            Institute of Medical Education & Research
          </Text>
          <Text style={styles.paraTxt}>
            • 2010 - 2015 Chief Consultant Cardiologist at Mohak Hitech Hospital
          </Text>
          <Text style={styles.paraTxt}>
            • 2010 - 2015 Chief Consultant Cardiologist at Bhandari Hospital &
            Research centre
          </Text>
          <Text style={styles.paraTxt}>
            • 2010 - 2015 Associate Professor Cardiology at Sri Aurbindo
            Institute of Medical Sciences, SAIMS
          </Text>
        </View>

        <View style={styles.txtContainer4}>
          <Text style={styles.txtHeading}>Registrations</Text>
          <Text style={styles.paraTxt}>
            • REG0028433 International Medical Council, 2003
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#F6F6F6',
  },
  consultantIcon: {
    height: 60,
    width: 60,
  },
  consultantIcon2: {
    height: 50,
    width: 50,
  },

  iconRow: {
    backgroundColor: '#00B7DD',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContainer: {
    marginLeft: 20,
  },
  userName: {
    fontSize: 18,
    color: '#FFFF',
    fontWeight: 'bold',
  },
  date: {
    color: '#FFFF',
  },
  infoUser: {
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appoinmentsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  inside: {
    alignItems: 'center',
    // borderRightWidth:0.5,
    // borderRightColor:"grey"
  },
  num: {
    fontSize: 25,
    color: '#FFFF',
    fontWeight: 'bold',
  },
  txt: {
    color: '#FFFF',
  },
  appoinmentTxt: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  tag: {
    backgroundColor: '#003C75',
    height: 20,
    width: 76,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 6,
  },
  btn: {
    backgroundColor: '#FFFF',
    width: 305,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: 25,
  },
  txtbtn: {
    color: 'black',
    fontSize: 14,
  },
  btnContain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  txtHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 7,
  },
  txtContainer: {
    backgroundColor: '#FFFF',
    width: 335,
    height: 234,
    borderRadius: 4,
    marginTop: 20,
  },
  txtContainer2: {
    backgroundColor: '#FFFF',
    width: 335,
    height: 254,
    borderRadius: 4,
    marginTop: 20,
  },
  txtContainer3: {
    backgroundColor: '#FFFF',
    width: 335,
    height: 356,
    borderRadius: 4,
    marginTop: 20,
  },
  txtContainer4: {
    backgroundColor: '#FFFF',
    width: 335,
    height: 84,
    borderRadius: 4,
    marginTop: 20,
  },
  paraTxt: {
    fontSize: 14,
    color: 'grey',
    marginTop: 20,
    marginLeft: 7,
  },
  paraTxt2: {
    fontSize: 14,
    color: 'grey',
    // marginTop:20,
    marginLeft: 7,
  },
  about: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
