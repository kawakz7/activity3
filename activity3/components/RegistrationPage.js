import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function RegistrationPage({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = async () => {
    if (password === confirmPassword) {
        try {
            const response = await fetch("http://192.168.254.107:8000/api/auth/register", {
                method: "POST",
                headers: {
                  "Accept":"application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  name: username,
                  email: email,
                  password: password
                })
            })
            const result = await response.json();
                console.log("Success:", result);
                if(response.status === 200){
                    await navigation.navigate("Login");

                    setUsername(""),
                    setEmail(""),
                    setPassword("")
                }
        } catch (error) {
            console.error("error: ", error)
        }

    
      navigation.navigate('Login', { username });
    } else {
      console.error('Passwords do not match!');
    }
  };

  
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image source={require('../images/nouri.png')} style={styles.logo} />
        <Text style={styles.title}>REGISTER</Text>

        <View style={styles.TextInput}>
          <AntDesign name="user" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Insert Your Username Here" value={username} onChangeText={(text) => setUsername(text)} />
        </View>

        <View style={styles.TextInput}>
          <MaterialIcons name="alternate-email" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Insert Your Email Address Here"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.TextInput}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Insert Your Password Here"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.TextInput}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Please Confirm Password Here"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity onPress={handleRegistration} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.button1}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={styles.already}><Text>Already Sign Up?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#279EFF', textDecorationLine: 'underline', marginLeft: 5 }}> SIGN IN </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#e8ecf4',
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: -60,
    marginTop: 50,
  },
  title:{ 
    fontSize: 28,
    fontWeight: '700',
    color: '#1e1e1e', 
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center', 
    marginBottom: 20 
},
  TextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 280,
    maxWidth: '80%',
    padding: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    paddingBottom: 8,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
    fontStyle: 'italic',
  },
  forgot: {
    color: '#279EFF',
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
  button1: {
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
  already: {
    flexDirection: 'row',
    marginTop: 8,
    fontWeight: '700',
  },
}
);