import {StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

export default function WelcomeScreen({navigation}) {
  const [, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.navigate('Authentication');
    }, 2000);
  }, [navigation]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.viewStyle}>
        <Image
          source={{
            uri: 'https://pmtips.net/Portals/0/GravityImages/1432/proportional/wrike-reviewx1280x853.png',
          }}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>PROJECT MANAGEMENT</Text>
        <ActivityIndicator
          animating={true}
          color={Colors.white}
          size="30"
          style={{marginTop: 90}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 200,
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c2e4a',
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '900',
    color: 'white',
    marginTop: '5%',
  },
});
