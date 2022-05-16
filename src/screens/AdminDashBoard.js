import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Avatar, TextInput, Button, Text} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function AdminDashBoard({navigation}) {
  const [adminPassword, setAdminPassword] = useState('');
  const [isSecure, setSecure] = useState(true);
  const [errortext, setErrortext] = useState('');

  const AdminLogin = () => {
    auth()
      .signInWithEmailAndPassword('test@squadminds.com', adminPassword)
      .then(users => {
        if (users) {
          navigation.replace('AHome');
        }
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/invalid-email') {
          setErrortext(error.message);
        } else if (error.code === 'auth/user-not-found') {
          setErrortext('No User Found');
        } else {
          setErrortext('Please check your email id or password');
        }
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Avatar.Image
            size={130}
            source={require('../assets/mainLogo.jpeg')}
            style={{marginTop: 80, alignSelf: 'center'}}
          />
        </View>
        <View style={styles.idView}>
          <Text style={styles.idText}>admin@squadminds.com</Text>
        </View>
        <View style={styles.userInput}>
          <TextInput
            size={100}
            secureTextEntry={isSecure}
            label="Admin_Password"
            mode="outlined"
            value={adminPassword}
            keyboardType="default"
            onChangeText={adminPassword => setAdminPassword(adminPassword)}
            right={
              <TextInput.Icon name={setSecure == false ? 'eye' : 'eye-off'} />
            }
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            mode="contained"
            onPress={() => AdminLogin()}
            style={styles.button}>
            Admin Login
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userInput: {
    width: '85%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  buttonView: {
    alignSelf: 'center',
    width: '85%',
    marginTop: '8%',
  },
  button: {height: 50, justifyContent: 'center'},
  idView: {marginTop: 25, alignSelf: 'center'},
  idText: {color: 'purple', fontWeight: '900', fontSize: 25},
});
