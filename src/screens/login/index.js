import React, {useState} from 'react';
import {
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {Container, Content} from 'native-base';
import InputBox from '../../components/input';
import Button from '../../components/button';
import axios from 'axios';
import Header from '../../components/header'
import {path} from '../../config/path'

export default function LogIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const logIn = () => {
    // axios
    //   .get(
    //     `${path.LOGIN_API}?email=${email}&&password=${password}`,
    //   )
    //   .then(res => {
    //     console.log('login response--> ', res.data);
        navigation.navigate('home');
    //   })
    //   .catch(e => {
    //     alert('login error');
    //     console.log('login error--> ', e);
    //   });
  };
  return (
    <ScrollView style={styles.content}>
      {/* <Header title='login' color='#FFFF' /> */}
      <SafeAreaView>
        <View style={styles.iconContainer}>
          <Image
            style={styles.docIcon}
            source={require('../../../assets/icons/doctor.png')}
          />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Lets Log you in.</Text>
          <Text style={styles.smallText}>
            Welcome back Doctor, You've been missed.
          </Text>
        </View>

        <SafeAreaView style={styles.form}>
          <View style={styles.inputs}>
            <InputBox
              onChangeText={text => setEmail(text)}
              floatLabel="EMAIL ADRESS"
            />
          </View>

          <View style={styles.inputs}>
            <InputBox
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              floatLabel="PASSWORD"
            />
          </View>

          <View style={styles.inputs}>
            <Button onPress={logIn} title="Log In" />
          </View>
          <View style={{marginTop: 20}}>
            <Text>Forgot Password? </Text>
          </View>
        </SafeAreaView>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#F6F6F6',
  },
  heading: {
    fontSize: 30,
  },
  docIcon: {
    width: 120,
    height: 80,
  },
  iconContainer: {
    marginTop: 40,
    //   marginLeft:20
  },
  headingContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  smallText: {
    color: 'grey',
  },
  inputs: {
    width: 310,
    marginTop: 20,
  },
  inputsdemo: {
    width: 310,
    marginTop: 20,
  },
  form: {
    alignItems: 'center',
    marginTop: 10,
  },
  boldTxt: {
    fontWeight: 'bold',
  },
});
