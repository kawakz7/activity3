import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react'

export default function Homepage({navigation}) {
  const handleLogout = () => {
    
    navigation.navigate('Login'); 
  };

    return (
  <View style={styles.container}>
    <Image source={require('../images/nouri.png')} style={styles.logo} />
    <Text style={styles.title}>WELCOME TO NOURI!</Text>
    <Text>THIS IS THE HOMEPAGE FOR NOURI!</Text>

    <TouchableOpacity style={styles.logout} onPress={handleLogout}>
      <Text style={styles.sign}>LOGOUT</Text>
    </TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    top: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: -50,
    marginTop: 50
  },
  title:{
    fontWeight: '700',
    fontSize: 30, 
    color: '#CEA988', 
    textAlign: 'center',
    marginBottom: 20
  },
  sign: {
    marginLeft: 10,
    color: '#FFFF',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10
  },
  logout: {
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#B98753',
    color: '#ffffff',
    marginBottom: 2,
    width: 260,
    borderRadius: 13,
    marginTop: 15,
    fontSize: 25,
    backgroundColor: '#B98753'
  },
}
);