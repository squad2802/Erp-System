import {StyleSheet, View, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import {Avatar, Title, Text, Paragraph, Checkbox} from 'react-native-paper';

export default function UserProfile() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require('../assets/avg.jpeg')} style={styles.image} />
          <Avatar.Image size={180} style={styles.avtar} />
          <Avatar.Image
            size={170}
            source={require('../assets/thenos.webp')}
            style={styles.avtar1}
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.userId}>SM108</Text>
          <Title style={styles.title}>Pradeep Yaduvanshi</Title>
          <Text>Programmer, React Native (Mobile) Developer</Text>
        </View>
        <View style={styles.mainView}>
          <Title style={styles.mainTitle}>About Me</Title>
          <Paragraph style={styles.paragraph}>
            Hello, i am React Native developer and having 1+ yr. experience
            android application development and done many project for android
            os.
          </Paragraph>
        </View>
        {/* ---------------------------------------------------------------------------- */}
        <View style={styles.mainView}>
          <Title style={styles.mainTitle}>Skills</Title>
          <View style={styles.view}>
            <Text style={styles.text}>Programming:{'    '}</Text>
            <Text>Java, C++, C#.</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Web & Scripting:{'    '}</Text>
            <Text>HTML, CSS, JAVASCRIPT.</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>DataBase:{'    '}</Text>
            <Text>Sqlite, Sql, Mysql.</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Tools:{'    '}</Text>
            <Text>React Native, Android Studio.</Text>
          </View>
        </View>
        {/* ---------------------------------------------------------------------------- */}
        <View style={styles.mainView}>
          <Title style={styles.mainTitle}>Office Contact's</Title>
          <View style={styles.view}>
            <Text style={styles.text}>Phone No:{'    '}</Text>
            <Text>87654321</Text>
            <Text>,{'   '}</Text>
            <Text>451125542</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Email:{'    '}</Text>
            <Text>Pradeep@squadmindsinc.com</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>LinkedIn:{'    '}</Text>
            <Text>pradeep2235/LinkedIn</Text>
          </View>
        </View>
        {/* ---------------------------------------------------------------------------- */}
        <View style={styles.mainView}>
          <Title style={styles.mainTitle}>Home Contact's</Title>
          <View style={styles.view}>
            <Text style={styles.text}>Phone No:{'    '}</Text>
            <Text>5466214515</Text>
            <Text>,{'   '}</Text>
            <Text>244551664</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Email:{'    '}</Text>
            <Text>kpradeep2235@gmail.com</Text>
          </View>
        </View>
        {/* ---------------------------------------------------------------------------- */}
        <View style={styles.mainView}>
          <Title style={styles.mainTitle}>Current Address</Title>
          <View style={styles.view}>
            <Text style={styles.text}>House/Flat no:{'    '}</Text>
            <Text>HE 126</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Village/Area/Block:{'    '}</Text>
            <Text>Block B</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Landmark's:{'    '}</Text>
            <Text>Behind Flower Market</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>City:{'    '}</Text>
            <Text>SAS Nagar (Mohali)</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>State:{'    '}</Text>
            <Text>Punjab</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Pin Code:{'    '}</Text>
            <Text>160062</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Country:{'    '}</Text>
            <Text>India</Text>
          </View>
          <View style={styles.view}>
            <Checkbox.Item
              label="Checked If both address are same"
              status="checked"
            />
          </View>
        </View>
        {/* ---------------------------------------------------------------------------- */}
        <View style={styles.mainView}>
          <Title style={styles.mainTitle}>Permanent Address</Title>
          <View style={styles.view}>
            <Text style={styles.text}>House/Flat no:{'    '}</Text>
            <Text>HE 126</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Village/Area/Block:{'    '}</Text>
            <Text>Block B</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Landmark's:{'    '}</Text>
            <Text>behind Flower Market</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>City:{'    '}</Text>
            <Text>SAS Nagar Mohali</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>State:{'    '}</Text>
            <Text>Punjab</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Pin Code:{'    '}</Text>
            <Text>160062</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Country:{'    '}</Text>
            <Text>India</Text>
          </View>
        </View>
        {/* ---------------------------------------------------------------------------- */}
        <View style={styles.mainView}>
          <Title style={styles.mainTitle}>Identification Details</Title>
          <View style={styles.view}>
            <Text style={styles.text}>Aadhar Card:{'    '}</Text>
            <Text>1245 </Text>
            <Text>1578 </Text>
            <Text>0045</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>PAN Card:{'    '}</Text>
            <Text>DYNPK2278M</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Voter Id Card:{'    '}</Text>
            <Text>12548525625</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Passport No:{'    '}</Text>
            <Text>Not Available</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Driving License:{'    '}</Text>
            <Text>Not Available</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Vehicle Reg No:{'    '}</Text>
            <Text>UP 80 EZ 4793</Text>
          </View>
        </View>
        {/* ---------------------------------------------------------------------------- */}
        <View style={styles.mainView}>
          <Title style={styles.mainTitle}>Personal Details</Title>
          <View style={styles.view}>
            <Text style={styles.text}>Father Name:{'    '}</Text>
            <Text>Mr.</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Mother Name:{'    '}</Text>
            <Text>Mrs.</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Marital Status:{'    '}</Text>
            <Text>single</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>DOB:{'    '}</Text>
            <Text>05/08/1995</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Hobbies:{'    '}</Text>
            <Text>Outdoor Games</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Blood Group:{'    '}</Text>
            <Text> Not konow</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Nationality:{'    '}</Text>
            <Text>Indian</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
  },
  avtar: {
    alignSelf: 'center',
    position: 'relative',
    marginTop: -100,
    backgroundColor: 'white',
  },
  avtar1: {
    alignSelf: 'center',
    position: 'relative',
    marginTop: -175,
  },
  title: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 25,
  },
  view: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
  },
  mainView: {
    marginTop: 10,
    marginLeft: 15,
  },
  mainTitle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A9A9A9',
  },
  userId: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  paragraph: {
    marginLeft: 7,
    fontWeight: '600',
  },
});
