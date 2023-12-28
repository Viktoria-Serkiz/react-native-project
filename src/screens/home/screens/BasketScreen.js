import React from "react";
import { SafeAreaView, TouchableOpacity, Text, FlatList } from "react-native";
import { observer } from "mobx-react";
import orderStore from "../store/Order";

export const BasketScreen = observer(({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => orderStore.removeOrder(item)}>
      {item && item.title && (
        <>
          <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
          <Text style={{ fontWeight: "bold" }}>{`Price: ${item.price}`}</Text>
          <Text>Remove</Text>
        </>
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
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Basket Screen</Text>
      </TouchableOpacity>

      <Text
        style={{ fontSize: 20 }}
      >{`In your shopping cart ${orderStore.orders.length} items`}</Text>
      <FlatList
        data={orderStore.orders}
        keyExtractor={(item, index) => index + ""}
        renderItem={renderItem}
      />

      <TouchableOpacity
        onPress={confirmOrder}
        style={{ backgroundColor: "blue", padding: 10, marginTop: 20 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Confirm Order
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
});
