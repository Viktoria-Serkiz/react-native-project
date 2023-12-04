import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";

export const CustomButton = ({
  title,
  width,
  source,
  onPress,
  textColor,
  buttonColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: buttonColor || "transparent",
          width: width || "auto",
        },
      ]}
    >
      <Text style={{ color: textColor || "black" }}>{title}</Text>
      {source && (
        <View style={{ marginLeft: 5 }}>
          <Image source={source} style={{ width: 20, height: 20 }} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
