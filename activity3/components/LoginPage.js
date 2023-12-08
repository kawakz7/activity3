import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Loginpage({navigation, route}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registeredUsername = route.params?.username;

  const handleSignup = async () => {
    console.log('Entered credentials:', { username, password });
    try {
        const response = await fetch("http://192.168.254.107:8000/api/auth/login", {
            method: "POST",
            headers: {
              "Accept":"application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: username,
              password: password
            })
        })
        const result = await response.json();
            console.log("Success:", result);
            if(response.status === 200){
                await navigation.navigate("Home");
                setUsername(""),
                setPassword("")
            }
    } catch (error) {
        console.error("error: ", error)
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image source={require('../images/nouri.png')} style={styles.logo} />
          <Text style={styles.title}>SIGN IN</Text>

          <Text style={styles.subtitle}> YOUR FAVORITE LOCAL COFFEE SHOP! </Text>
        <View style={styles.TextInput}>
          <AntDesign name="user" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Insert Your Email"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.TextInput}>
          <AntDesign name="lock" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Insert Your Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress={handleSignup} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.sign}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.sign1}>SIGN UP</Text>
       </TouchableOpacity>
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
    marginBottom: -80,
    marginTop: 0,
  },
  title:{ 
    fontSize: 40,
    fontWeight: '800',
    color: '#1e1e1e', 
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center', 
    marginBottom: 30
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
    marginBottom: 20
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
    fontStyle: 'italic',
  },
  sign: {
    padding: 10,
    backgroundColor: '#B98753',
    color: '#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 2,
    width: 260,
    borderRadius: 13,
    fontSize: 25,
  },
  sign1: {
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
  subtitle:{
    fontSize: 18,
    fontWeight: '500',
    color: '#CEA988',
    textAlign: 'center',
    marginBottom: 50,
    marginLeft:25,
    marginRight:25,
  },
});