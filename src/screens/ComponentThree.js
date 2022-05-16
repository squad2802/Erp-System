import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Calendar, Agenda} from 'react-native-calendars';

const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};

export default function ComponentThree() {
  return (
    <View>
      <Calendar />
    </View>
  );
}

const styles = StyleSheet.create({});
