import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function Login({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>SIGN IN</Text>
      <Text style={styles.smallText}>Sign into your account to proceed</Text>

      <View style={styles.inputgroup}>
        <Text style={styles.inputLabel}>Enter Username:</Text>
        <TextInput style={styles.inputbox} onChangeText={(val) => setUsername(val)} />
      </View>

      <View style={styles.inputgroup}>
        <Text style={styles.inputLabel}>Enter Password:</Text>
        <TextInput style={styles.inputbox} onChangeText={(val) => setPassword(val)} />
      </View>

      <TouchableOpacity 
          style={styles.buttonStyle} 
          onPress={() => navigation.navigate('Home')} >
            <Text style={styles.buttonStyleText} >Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D5D20',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  boldText: {
    color: '#ffffff',
    fontSize: 20,
  },
  smallText: {
    color: '#ffffff',
    fontSize: 12,
  },
  inputgroup:{
    marginVertical: 20,
  },
  inputLabel: {
    color: '#ffffff'
  },
  inputbox: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  buttonStyle: {
    color: '#1D5D20',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonStyleText: {
    textAlign: 'center',
    color: '#1D5D20'
  }
});