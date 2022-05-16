import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-paper';

export default function AdminHome({navigation}) {
  return (
    <View>
      <FAB
        style={styles.fab}
        icon={'plus'}
        onPress={() => navigation.navigate('AddUser')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    marginTop: 620,
    right: 0,
  },
});
