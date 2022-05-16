import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Avatar, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function LoginScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  const handleLogin = () => {
    // alert('ok');
    if (phoneNumber && phoneNumber > 9) {
      navigation.navigate('Verify');
      const confirmation = auth().signInWithPhoneNumber(phoneNumber);
      setPhoneNumber(confirmation);
      console.log(setPhoneNumber);
    }
  };
  

  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      <ScrollView>
        <View>
          <Avatar.Image
            size={130}
            source={require('../assets/mainLogo.jpeg')}
            style={styleSheet.image}
          />
        </View>
        <View style={styleSheet.view}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="IN"
            layout="first"
            withShadow
            autoFocus
            containerStyle={styleSheet.phoneNumberView}
            textContainerStyle={{paddingVertical: 0}}
            onChangeFormattedText={text => {
              setPhoneNumber(text);
            }}
          />
        </View>
        <Button
          mode="contained"
          onPress={() => handleLogin()}
          style={styleSheet.button}>
          GET OTP!
        </Button>
        <View style={styleSheet.adminText}>
          <Text style={styleSheet.login}>Login as Admin {'  '}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
            <Text style={styleSheet.idText}>admin@squadminds.com</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  phoneNumberView: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    marginTop: 10,
  },
  view: {
    marginTop: 30,
    width: '100%',
  },
  image: {
    marginTop: 80,
    alignSelf: 'center',
  },
  login: {
    color: 'black',
    fontWeight: 'bold',
  },
  adminText: {
    flexDirection: 'row',
    marginTop: '30%',
    alignSelf: 'center',
  },
  idText: {color: 'purple', fontWeight: 'bold'},
});
