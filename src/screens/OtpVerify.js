import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Button, Title} from 'react-native-paper';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export default function OtpVerify({navigation}) {
  const [otpArray, setOtpArray] = useState('');
  const ref = useBlurOnFulfill({otpArray, cellCount: 6});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    otpArray,
    setOtpArray,
  });
  const handleVerify = () => {
    // alert('ok');
    navigation.navigate('Dashboard');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Title>Verify the Authorisation Code</Title>
      <Text style={{color: 'black'}}>{'Sent to 8193931712'}</Text>
      <CodeField
        ref={ref}
        {...props}
        value={otpArray}
        onChangeText={setOtpArray}
        cellCount={6}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => handleVerify()}>
        Verify
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  focusCell: {
    borderColor: 'purple',
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    marginLeft: 3,
    marginRight: 3,
    fontSize: 24,
    borderWidth: 2,
    borderColor: 'white',
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    marginTop: 20,
  },
});

// import React, {useState, useEffect} from 'react';
// import {Button, TextInput, Text} from 'react-native';
// import auth from '@react-native-firebase/auth';

// export default function OtpVerify() {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) {
//       setInitializing(false);
//     }
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   });

//   // Handle create account button press
//   async function createAccount() {
//     try {
//       await auth().createUserWithEmailAndPassword(
//         'tts.doe@example.com',
//         'SuperSecretPassword!',
//       );
//       console.log('User account created & signed in!');
//     } catch (error) {
//       if (error.code === 'auth/email-already-in-use') {
//         console.log('That email address is already in use!');
//       }

//       if (error.code === 'auth/invalid-email') {
//         console.log('That email address is invalid!');
//       }
//       console.error(error);
//     }
//   }

//   // Handle the verify phone button press
//   async function verifyPhoneNumber(phoneNumber) {
//     const confirmation = await auth().verifyPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   // Handle confirm code button press
//   async function confirmCode() {
//     try {
//       const credential = auth.PhoneAuthProvider.credential(
//         confirm.verificationId,
//         code,
//       );
//       let userData = await auth().currentUser.linkWithCredential(credential);
//       setUser(userData.user);
//     } catch (error) {
//       if (error.code == 'auth/invalid-verification-code') {
//         console.log('Invalid code.');
//       } else {
//         console.log('Account linking error');
//       }
//     }
//   }

//   if (initializing) {
//     return null;
//   }

//   if (!user) {
//     return <Button title="Login" onPress={() => createAccount()} />;
//   } else if (!user.phoneNumber) {
//     if (!confirm) {
//       return (
//         <Button
//           title="Verify Phone Number"
//           onPress={() =>
//             verifyPhoneNumber('ENTER A VALID TESTING OR REAL PHONE NUMBER HERE')
//           }
//         />
//       );
//     }
//     return (
//       <>
//         <TextInput value={code} onChangeText={text => setCode(text)} />
//         <Button title="Confirm Code" onPress={() => confirmCode()} />
//       </>
//     );
//   } else {
//     return (
//       <Text>
//         Welcome! {user.phoneNumber} linked with {user.email}
//       </Text>
//     );
//   }
// }
