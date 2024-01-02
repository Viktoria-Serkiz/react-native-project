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

export const PizzaScreen = observer(({ route }) => {
  const navigation = useNavigation();
  const { pizza } = route.params;
  const item = orderStore.orders.find(
    (orderItem) => orderItem.id === pizza.id
  ) || { quantity: 0 };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={navigateBack}>
        <Text>Pizza Screen</Text>
      </TouchableOpacity>
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
        <View style={pizzaScreenStyle.quantityWrapper}>
          <TouchableOpacity
            style={pizzaScreenStyle.quantityButton}
            onPress={() => orderStore.setOrders(pizza)}
          >
            <Text style={pizzaScreenStyle.plusMinus}>+</Text>
          </TouchableOpacity>
          <Text style={pizzaScreenStyle.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            style={pizzaScreenStyle.quantityButton}
            onPress={() => orderStore.removeOrder(pizza)}
          >
            <Text style={pizzaScreenStyle.plusMinus}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
});

export const pizzaScreenStyle = StyleSheet.create({
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
