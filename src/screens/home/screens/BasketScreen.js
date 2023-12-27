import React from "react";
import { SafeAreaView, TouchableOpacity, Text, FlatList } from "react-native";
import { observer } from "mobx-react";
import orderStore from "../store/Order";

export const BasketScreen = observer(() => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => orderStore.removeOrder(item)}>
      <Text>{item.title}</Text>
      <Text>{`Price: ${item.price}`}</Text>
      <Text>Remove</Text>
    </TouchableOpacity>
  );

  const confirmOrder = () => {
    orderStore.confirmOrder();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={navigateBack}>
        <Text>Basket Screen</Text>
        <Text>{`In your shopping cart ${orderStore.orders.length} items`}</Text>
      </TouchableOpacity>

      <FlatList
        data={orderStore.orders}
        keyExtractor={(item, index) => index + ""}
        renderItem={renderItem}
      />

      <TouchableOpacity onPress={confirmOrder}>
        <Text>Confirm Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
});

// import { SafeAreaView, TouchableOpacity, Text } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import orderStore from "../store/Order";

// export const BasketScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();

//   const navigateBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <TouchableOpacity onPress={navigateBack}>
//         <Text>Basket Screen</Text>
//         <Text>{`In your shopping cart ${orderStore.orders.length}`}</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// import React from "react";
// import {
//   SafeAreaView,
//   TouchableOpacity,
//   FlatList,
//   View,
//   Text,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import orderStore from "../store/Order";

// export const BasketScreen = ({ route }) => {
//   const navigation = useNavigation();

//   const navigateBack = () => {
//     navigation.goBack();
//   };

//   const removeItem = (itemId) => {
//     orderStore.removeOrder(itemId);
//   };

//   const getTotalPrice = () => {
//     return orderStore.orders.reduce((total, item) => total + item.price, 0);
//   };

//   const renderItem = ({ item }) => (
//     <View
//       style={{
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginBottom: 10,
//       }}
//     >
//       <Text>{pizza.name}</Text>
//       <TouchableOpacity onPress={() => removeItem(item.id)}>
//         <Text style={{ color: "red" }}>Remove</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   const confirmOrder = () => {};

//   return (
//     <SafeAreaView style={{ flex: 1, padding: 16 }}>
//       <TouchableOpacity onPress={navigateBack}>
//         <Text style={{ fontSize: 20, marginBottom: 10 }}>Basket Screen</Text>
//         <Text>{`In your shopping cart: ${orderStore.orders.length} items`}</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={orderStore.orders}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         style={{ marginTop: 20 }}
//       />

//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           marginTop: 20,
//         }}
//       >
//         <Text style={{ fontWeight: "bold" }}>{`Total:`}</Text>
//         <Text style={{ fontWeight: "bold" }}>{`$${getTotalPrice().toFixed(
//           2
//         )}`}</Text>
//       </View>

//       <TouchableOpacity
//         onPress={confirmOrder}
//         style={{ backgroundColor: "blue", padding: 10, marginTop: 20 }}
//       >
//         <Text style={{ color: "white", textAlign: "center" }}>
//           Confirm Order
//         </Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// BasketScreen.js
