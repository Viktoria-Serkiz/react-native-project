import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { loginPageStyles } from "./styles";

export const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isSurnameValid, setIsSurnameValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  const validateInput = () => {
    const isNameValid = name.trim() !== "";
    const isSurnameValid = surname.trim() !== "";
    const isPhoneNumberValid = phoneNumber.trim() !== "";

    setIsNameValid(isNameValid);
    setIsSurnameValid(isSurnameValid);
    setIsPhoneNumberValid(isPhoneNumberValid);

    return isNameValid && isSurnameValid && isPhoneNumberValid;
  };

  useEffect(() => {
    validateInput();
  }, [name, surname, phoneNumber]);

  const handleRegistration = async () => {
    if (!validateInput()) {
      return;
    }

    const userData = {
      name,
      surname,
      phoneNumber,
    };

    try {
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
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
          style={[
            loginPageStyles.textInputLogin,
            { borderColor: isNameValid ? "black" : "red" },
          ]}
        />
        <TextInput
          placeholder="Surname"
          value={surname}
          onChangeText={(text) => setSurname(text)}
          style={[
            loginPageStyles.textInputLogin,
            {
              borderColor: isSurnameValid ? "black" : "red",
            },
          ]}
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          style={[
            loginPageStyles.textInputLogin,
            {
              borderColor: isPhoneNumberValid ? "black" : "red",
            },
          ]}
        />
        <Button
          title="Register"
          onPress={handleRegistration}
          // disabled={!validateInput()}
        />
      </View>
    </SafeAreaView>
  );
};
