import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from 'axios'
import Logo from '../../components/LogoSvg'
import { UserContext } from "../../context/UserContext";

export default function Register({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
 
  const { setUser } = useContext(UserContext)

  const Register = async () => {
    try {
      const AlreadyExist = await axios.get(`http://192.168.1.5:8080/user/buscar/${email}`);
      if (AlreadyExist.data) {
        setMessage('Email já utilizado')
      }
    } catch (error) {

      const respose = await axios({
        method: 'post',
        url: `http://192.168.1.5:8080/user/inserir`,
        data: {"nome": name, "email": email, "senha": password}
      });

      if(respose.data){
        var LoginData = await axios.get(`http://192.168.1.5:8080/user/buscar/${email}`);
        setUser(LoginData.data)

        navigation.navigate('Home')
      }
      
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.TextTittle}>Registrar</Text>
      <View style={styles.image}>
        <Logo style={styles.image} />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nome"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
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
 
      <TouchableOpacity onPress={ () => { navigation.navigate('Login')}}>
        <Text style={styles.forgot_button}>Já tenho uma conta</Text>
      </TouchableOpacity>
      <Text  style={styles.alert_text}>{alert}</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={ () => Register()}>
        <Text style={styles.loginText}>REGISTRAR</Text>
      </TouchableOpacity>
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
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#106cd6"
  },

  loginText:{
    color: 'white',
    fontSize: 18
  },

  alert_text:{
    color: 'red',
    fontSize: 15,
    fontStyle: 'italic'
  }
});