import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const PizzaScreen = ({ route }) => {
  const navigation = useNavigation();

  const { pizza } = route.params;

  const navigateBack = () => {
    navigation.goBack();
    route.params.goBackCallBack("Test value");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={navigateBack}>
        <Text>Pizza Screen</Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            source={{ uri: pizza.image }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 20,
              marginTop: 40,
              marginBottom: 40,
            }}
          ></Image>

          <Text style={{ width: "90%", fontSize: 15 }} numberOfLines={10}>
            {pizza.description.split(" ").join("\u200B ")}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
