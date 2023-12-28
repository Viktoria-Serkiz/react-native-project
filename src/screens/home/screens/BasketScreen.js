import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { observer } from "mobx-react";
import orderStore from "../store/Order";
import * as colors from "../../../theme/colors";

export const BasketScreen = observer(({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => orderStore.removeOrder(item)}>
      {item && item.title && (
        <View style={basketStyle.items}>
          <View>
            <Image
              source={{ uri: item.image }}
              style={basketStyle.image}
            ></Image>
          </View>
          <View style={basketStyle.wrapperForTitle}>
            <View style={basketStyle.orderTitle}>
              <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              <Text
                style={{ fontWeight: "bold" }}
              >{`Price: ${item.price}`}</Text>
            </View>

            <View style={basketStyle.quantityWrapper}>
              <TouchableOpacity
                style={basketStyle.quantityButton}
                onPress={() => orderStore.setOrders(item)}
              >
                <Text style={basketStyle.plusMinus}>+</Text>
              </TouchableOpacity>
              <Text style={basketStyle.quantityText}>{item.quantity}</Text>
              <TouchableOpacity
                style={basketStyle.quantityButton}
                onPress={() => orderStore.removeOrder(item)}
              >
                <Text style={basketStyle.plusMinus}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  const confirmOrder = () => {
    orderStore.confirmOrder();
  };

  console.log("orderStore.orders:", orderStore.orders);

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity onPress={navigateBack}>
        <Text style={{ fontSize: 15, marginBottom: 10 }}>Basket Screen</Text>
      </TouchableOpacity>

      <Text
        style={basketStyle.mainText}
      >{`In your shopping cart ${orderStore.calculateTotalQuantity} items`}</Text>

      <FlatList
        data={orderStore.orders}
        keyExtractor={(item, index) => index + ""}
        renderItem={renderItem}
      />
      <Text
        style={basketStyle.totalText}
      >{`Total: ${orderStore.calculateTotal}`}</Text>

      <TouchableOpacity
        onPress={confirmOrder}
        style={basketStyle.confirmButton}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Confirm Order
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
});

export const basketStyle = StyleSheet.create({
  mainText: {
    textAlign: "center",
    fontSize: 20,
  },

  items: {
    width: "100%",
    borderColor: colors.borderForItem,
    borderBottomWidth: 1,
    minHeight: 80,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 10,
  },

  wrapperForTitle: {
    flexDirection: "row",
    alignItems: "flex-end",
   
  },

  orderTitle: {
    marginRight: 40,
    width:"45%"
  },

  quantityWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  plusMinus: {
    fontWeight: "bold",
  },

  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
  },

  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },

  confirmButton: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 20,
  },
});
