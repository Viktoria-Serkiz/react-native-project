// RegistrationScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { loginPageStyles } from "./styles";

export const RegistrationScreen = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegistration = async () => {
    // Save user data to local storage
    const userData = {
      name,
      surname,
      phoneNumber,
    };

    try {
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      // Navigate to home screen
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={loginPageStyles.headerLoginText}>Welcome!</Text>
        <Text style={loginPageStyles.headerLoginText}>Log in</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={loginPageStyles.textInputLogin}
        />
        <TextInput
          placeholder="Surname"
          value={surname}
          onChangeText={(text) => setSurname(text)}
          style={loginPageStyles.textInputLogin}
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          style={loginPageStyles.textInputLogin}
        />
        <Button title="Register" onPress={handleRegistration} />
      </View>
    </SafeAreaView>
  );
};
