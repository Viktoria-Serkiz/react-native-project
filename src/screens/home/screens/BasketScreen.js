import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { observer } from "mobx-react";
import orderStore from "../store/Order";

import { basketStyle } from "./styles";
import emptyBasket from "../../../utils/img/empty-cart.png";

export const BasketScreen = observer(({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <View>
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
          <TouchableOpacity
            onPress={() => orderStore.removeItemsInOrder(item)}
            style={basketStyle.deleteOrderButton}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
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

      <View style={{ alignItems: "center" }}>
        <Text
          style={basketStyle.mainText}
        >{`In your shopping cart ${orderStore.calculateTotalQuantity} items`}</Text>

        {orderStore.orders.length === 0 && (
          <View style={{ paddingTop: 200, alignItems: "center" }}>
            <Image source={emptyBasket} style={{ width: 100, height: 100 }} />
            <TouchableOpacity onPress={navigateBack}>
              <Text style={basketStyle.backToShopping}>Back to shopping</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
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
