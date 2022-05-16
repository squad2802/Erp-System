import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {} from 'react-native-paper';

const DATA = [
  'first row',
  'second row',
  'third row',
  'fourth row',
  'fifth row',
  'sixth row',
  'seventh row',
  'Eight row',
  'Nine row',
  'Tenth row',
];
export default function ComponentOne() {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View>
            <Text style={styles.item_style}>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item_style: {
    backgroundColor: '#A9A9A9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  // header: {
  //   textAlign: 'center',
  //   backgroundColor: '#B2C2D2',
  //   padding: 20,
  //   fontSize: 20,
  // },
});
