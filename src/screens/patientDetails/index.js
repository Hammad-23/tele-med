import React, {useState} from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';
import InputBox from '../../components/input';
import RadioButton from '../../components/radioButton';
import CustomButton from '../../components/button'

export default function PatientDetails() {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [selected, setSelected] = useState('');
  const [patientName,setPatientName]=useState('');
  const [dateBirth,setDateBirth]=useState('');
  const [age,setAge]=useState('');
  const radioMale = () => {
    setMale(!male);
    setFemale(false)
  };
  const radioFemale = () => {
    setFemale(!female);
    setMale(false)
  };
  const proceedBtn=()=>{
    if(male){
      setSelected('Male')
    }else if(female){
      setSelected('Female')
    }

    console.log('selected--> ',selected);

  }
  return (
    <>
      <View style={styles.start}>
        <ScrollView contentContainerStyle={styles.form}>
          <View>
            <Text style={styles.startText}>Tell Us About Patient</Text>
          </View>

          <View style={styles.inps}>
            <InputBox onChangeText={text => setPatientName(text)} floatLabel="FULL NAME" />
          </View>

          <View style={styles.inpsRow}>
            <View style={styles.smallInps}>
              <InputBox onChangeText={text => setDateBirth(text)} floatLabel="DATE OF BIRTH" />
            </View>
            <View style={styles.smallInps}>
              <InputBox keyboardType="numeric" onChangeText={text => setAge(text)} floatLabel="AGE(YEARS)" />
            </View>
          </View>

          <View style={styles.inps}>
            <View>
              <Text style={{color: '#8F92A1'}}>GENDER</Text>
            </View>
            <View style={styles.inps2}>
              <View>
                <RadioButton
                  textColor={female ? '#FFFF' : '#003C75'}
                  color={female ? '#003C75' : '#FFFF'}
                  onPress={radioFemale}
                  name="Female"
                />
              </View>
              <View style={{marginLeft: 10}}>
                <RadioButton
                  textColor={male ? '#FFFF' : '#003C75'}
                  color={male ? '#003C75' : '#FFFF'}
                  onPress={radioMale}
                  name="Male"
                />
              </View>
            </View>
          </View>
          <View style={styles.inps}>
            <View>
              <Text>
                  DOCUMENTS
              </Text>
            </View>
          </View>
          <View style={styles.inps}>  
            <CustomButton onPress={proceedBtn} title='PROCEED' />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#F6F6F6',
  },
  start: {
    // marginTop:20,
    // marginLeft:20
    // justifyContent:'center'
    alignItems: 'center',
  },
  startText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  form: {
    width: 315,
    marginTop: 20,
  },
  inps: {
    marginTop: 20,
  },
  inps2: {
    marginTop: 20,
    flexDirection: 'row',
  },
  inpsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  smallInps: {
    width: 150,
  },
});
