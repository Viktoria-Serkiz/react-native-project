import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export const SettingsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const navigateBack = () => {
    navigation.goBack();
    // route.params.goBackCallBack("Test value");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={navigateBack}>
        <Text>Settings Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
