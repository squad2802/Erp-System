import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {PieChart, LineChart} from 'react-native-chart-kit';
import {Title} from 'react-native-paper';
import React from 'react';

const MyPieChart = () => {
  return (
    <>
      {/* <Text style={styles.header}>Pie Chart</Text> */}
      <Title>Design Progress</Title>
      <PieChart
        data={[
          {
            name: 'Phase1',
            population: 46,
            color: 'rgb(128, 0, 128)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Phase2',
            population: 20,
            color: 'rgb(255, 0, 0)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Phase3',
            population: 30,
            color: '#FFFF00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Phase4',
            population: 5,
            color: 'rgb(0, 0, 255)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get('window').width - 1}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //For the absolute number else percentage
      />
    </>
  );
};
// --------------------------------------------------------------------------

const MyLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Line Chart</Text>
      <LineChart
        data={{
          labels: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
          ],
          datasets: [
            {
              data: [5, 16, 26, 40, 55, 60, 35, 90, 16, 26, 40, 55],
              strokeWidth: 1,
            },
          ],
        }}
        width={Dimensions.get('window').width - 1}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 0,
        }}
      />
    </>
  );
};

export default function MainUserDash() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <MyPieChart />
      <MyLineChart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  // header: {
  //   textAlign: 'center',
  //   fontSize: 18,
  //   padding: 16,
  //   marginTop: 16,
  // },
});
