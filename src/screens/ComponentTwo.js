import {StyleSheet, SafeAreaView, View, Dimensions} from 'react-native';
import React from 'react';
import {Calendar, Agenda} from 'react-native-calendars';
import EventCalendar from 'react-native-events-calendar';
let {width} = Dimensions.get('window');
export default function ComponentTwo() {
  return (
    <SafeAreaView>
      <Calendar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
