import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Home({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.firtText}>
            <Text style={styles.boldTextBlack}>Welcome</Text>
            <Text style={styles.smallTextTo}>To</Text>
            <Text style={styles.boldTextName}>Agromobile</Text>
        </View>
        <View style={styles.tabMother}>
            <View style={styles.tabdisplay}>
                <View style={styles.tabsection}>
                    <Text style={styles.tabsectionText}>
                        <MaterialCommunityIcons name="seed-outline" 
                            style={{color: '#F5DBAB', fontSize: 40 }}
                         />
                    </Text>
                    <Text style={styles.tabsectionText}>Cashew Notes</Text>
                </View>
                <View style={styles.tabsection}>
                    <Text style={styles.tabsectionText}>
                        <Entypo name="location-pin" 
                            style={{color: 'red', fontSize: 40 }}
                         />
                    </Text>
                    <Text style={styles.tabsectionText}>Locate Village</Text>
                </View>
            </View>

            <View style={{marginBottom: 20 }}></View>

            <View style={styles.tabdisplay}>
                <View style={styles.tabsection}>
                    <Text style={styles.tabsectionText}>
                        <AntDesign name="questioncircle" 
                            style={{color: '#4DB56D', fontSize: 40 }}
                         />
                    </Text>
                    <Text style={styles.tabsectionText}>Ask Questions</Text>
                </View>
                <View style={styles.tabsection}>
                    <Text style={styles.tabsectionText}>
                        <MaterialCommunityIcons name="update" 
                            style={{color: '#7ED4FF', fontSize: 40 }}
                         />
                    </Text>
                    <Text style={styles.tabsectionText}>Update Profile</Text>
                </View>
            </View>
        </View>
        <View>
            <TouchableOpacity 
                style={styles.buttonStyle} 
                onPress={() => navigation.navigate('About')} >
                    <Text style={styles.buttonStyleText} >About</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.textNoteView}>
            <Text style={styles.textNoteText}>Developed by Olatunji Boye and Professor S.A Onasanya, department of Educational Technology, University of Ilorin</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  firtText:{
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  boldTextBlack: {
    color: '#000000',
    fontSize: 20,
    marginRight: 5,
  },
  smallTextTo: {
    color: '#BFD5BA',
    marginRight: 5,
    marginTop: 5,
  },
  boldTextName: {
    color: '#1D5D20',
    fontSize: 20,
    marginRight: 10,
  },
  tabMother: {
    backgroundColor: '#1D5D20',
    padding: 20,
    borderRadius: 10,
  },
  tabdisplay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabsection: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10
  },
  tabsectionText: {
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#1D5D20',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonStyleText: {
    textAlign: 'center',
    color: '#ffffff'
  },
  textNoteView: {
    marginTop: 20,
  },
  textNoteText: {
    textAlign: 'center',
  }
  
});