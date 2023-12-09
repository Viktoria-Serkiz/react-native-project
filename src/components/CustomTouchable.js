import React from "react";
import { Platform, Pressable, TouchableWithoutFeedback } from "react-native";

const CustomTouchable = ({
  onPress,
  children,
  style,
  withoutFeedback,
  ...props
}) => {
  const Component = withoutFeedback ? TouchableWithoutFeedback : Pressable;

  return (
    <Component
      onPress={onPress}
      android_ripple={
        withoutFeedback ? undefined : { color: "210, 230, 255", radius: -5 }
      }
      style={({ pressed }) => [
        Platform.OS === "ios" &&
          !withoutFeedback && {
            opacity: pressed ? 0.8 : 1,
          },
        { overflow: "hidden" },
        style,
      ]}
      {...props}
    >
      {children}
    </Component>
  );
};

export default CustomTouchable;
