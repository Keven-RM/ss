import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Logo from '../../components/LogoSvg'
import axios from 'axios'
import { UserContext } from "../../context/UserContext";

export default function Login({navigation}) {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const { setUser, user } = useContext(UserContext)
  
  const Auth = async () => {
    try {
      const response = await axios.get(`http://192.168.1.5:8080/user/auth/${email}/${password}`)

      if(response.data){
       axios.get(`http://192.168.1.5:8080/user/buscar/${email}`)
       .then( ({data}) => setUser(data))
       
       navigation.navigate('Home')
      }
      console.log(user);
    } catch (error) {
      const { response } = error;
      
      if(response.status != 200){
        setMessage('Falha ao fazer login')
      }
    }

  }

 
  return (
    <View style={styles.container}>
      <Text style={styles.TextTittle}>Login</Text>
      <View style={styles.image}>
        <Logo style={styles.image} />
      </View>
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Senha"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity onPress={ () => { navigation.navigate('Register')}}>
        <Text style={styles.forgot_button}>Ainda não possui uma conta ?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => Auth()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.alert_text}>
          {message}
        </Text>
      </View>

    </View>
  );
}
 
const styles = StyleSheet.create({
  TextTittle:{
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 70
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40
  },
 
  image: {
    marginBottom: 50,
    alignItems: 'center',
  },
 
  inputView: {
    backgroundColor: "#d8d8d8",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    alignItems: "center",
    paddingTop: 8
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 5,
  },
 
  loginText:{
    color: 'white',
    fontSize: 18
  },
  
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: "#106cd6",
  },

  alert_text:{
    color: 'red',
    fontSize: 15,
    fontStyle: 'italic'
  }
});