import { useMutation, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { LOGIN_USER } from "../queries/users";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(password, email, "<><><><><>< data");

  let [loginUser, { data, loading, error, reset }] = useMutation(LOGIN_USER);

  // const { loading, error, data } = useQuery(LOGIN_USER, {
  //   variables: {
  //     email,
  //     password,
  //   },
  // });

  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: "https://i.ibb.co/StDCmqh/Logo2-removebg.png" }} />
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput} placeholder="Email" placeholderTextColor="#003f5c" onChangeText={(email) => setEmail(email)} />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput} placeholder="Password" placeholderTextColor="#003f5c" secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <Text style={styles.forgot_button}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("mainPages")}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width: 200,
    height: 80,
  },
  inputView: {
    backgroundColor: "#e3e7fa",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: "center",
  },
  forgot_button: {
    height: 20,
    marginBottom: 10,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#adafba",
  },
});
