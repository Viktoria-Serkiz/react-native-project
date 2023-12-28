import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { observer } from "mobx-react";
import orderStore from "../store/Order";
import * as colors from "../../../theme/colors";

export const PizzaScreen = observer(({ route }) => {
  const navigation = useNavigation();
  const { pizza } = route.params;
  const item = orderStore.orders.find(
    (orderItem) => orderItem.id === pizza.id
  ) || { quantity: 0 };

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
          <View style={basketStyle.quantityWrapper}>
            <TouchableOpacity
              style={basketStyle.quantityButton}
              onPress={() => orderStore.setOrders(pizza)}
            >
              <Text style={basketStyle.plusMinus}>+</Text>
            </TouchableOpacity>
            <Text style={basketStyle.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              style={basketStyle.quantityButton}
              onPress={() => orderStore.removeOrder(pizza)}
            >
              <Text style={basketStyle.plusMinus}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
});

export const basketStyle = StyleSheet.create({
  quantityWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  plusMinus: {
    fontWeight: "bold",
    fontSize: 40,
  },

  quantityText: {
    fontSize: 30,
    marginHorizontal: 10,
  },
});
