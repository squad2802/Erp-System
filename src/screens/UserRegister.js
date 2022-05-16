import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useRef} from 'react';
import {Headline, TextInput, Button} from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
// import firestore from '@react-native-firebase/firestore';

export default function UserRegister() {
  let [userName, setUserName] = useState('');
  let [UserEmail, setUserEmail] = useState('');
  let [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  const handleAddUser = () => {
    // if(userName && UserEmail && phoneNumber) {
      
    // } else {};
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView>
        <View>
          <Headline style={styles.heading}>ADD USER</Headline>
        </View>
        <View>
          <TextInput
            mode="outlined"
            label="User Name"
            //   placeholder="Type something"
            style={styles.textInput}
            onChangeText
          />
          <TextInput
            mode="outlined"
            label="User Email"
            //   placeholder="Type something"
            style={styles.textInput}
          />
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="IN"
            layout="first"
            withShadow
            autoFocus
            containerStyle={styles.phoneNumberView}
            textContainerStyle={{paddingVertical: 0}}
            onChangeFormattedText={text => {
              setPhoneNumber(text);
            }}
          />
          <View
            style={{flexDirection: 'row', marginTop: 35, alignSelf: 'center'}}>
            {/* <Button
              mode="contained"
              style={styles.button}
              onPress={() => console.log('Pressed')}>
              CANCEL
            </Button> */}
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => handleAddUser()}>
              ADD User
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    margin: 20,
  },
  heading: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: '40%',
  },
  textInput: {
    marginTop: 10,
  },
  phoneNumberView: {
    width: '99%',
    height: 60,
    // backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 5,
  },
  button: {
    height: 50,
    width: '80%',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 13,
  },
});
