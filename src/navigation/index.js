import { useEffect, useState } from "react";
import { Text, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { HomeScreen } from "../screens/home/screens/HomeScreen";
import { PizzaScreen } from "../screens/home/screens/PizzaScreen";
import { ModalScreen } from "../screens/home/screens/ModalScreen";
import { BasketScreen } from "../screens/home/screens/BasketScreen";
import { RegistrationScreen } from "../screens/home/screens/RegistrationScreen";
import { AccountScreen } from "../screens/home/screens/AccountScreen";

import accountIcon from "../utils/img/account.png";
import homeIcon from "../utils/img/home-icon.png";
import basketIcon from "../utils/img/shopping-cart.png";

import orderStore from "../screens/home/store/Order";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const HeaderLeft = () => {
  const navigation = useNavigation();
  return <Text onPress={() => navigation.goBack()}>BACK</Text>;
};

const HomeStack = () => {
  const HomeStack = createNativeStackNavigator();
  const navigation = useNavigation();

  const navigateToModal = (modalImg) => {
    navigation.navigate("Modal", {
      modalImg,
    });

    navigation.setOptions({
      goBackCallBack: () => {},
    });
  };

  const [initialRoute, setInitialRoute] = useState("Registration");

  useEffect(() => {
    checkRegistrationStatus();
  }, []);

  const checkRegistrationStatus = async () => {
    try {
      const userData = await AsyncStorage.getItem("userData");
      const isLoggedIn = userData !== null;

      setInitialRoute(isLoggedIn ? "Home" : "Registration");
    } catch (error) {
      console.error("Error reading user data:", error);
    }
  };

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <HomeStack.Screen
        options={{
          headerLeft: HeaderLeft,
          presentation: "containedModal",
        }}
        name="Pizza"
        component={PizzaScreen}
      />
      <HomeStack.Screen
        name="Modal"
        component={ModalScreen}
        options={{
          presentation: "modal",
          headerTitle: "",
          headerTransparent: true,
          headerLeft: HeaderLeft,
        }}
      />
      <HomeStack.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          headerLeft: HeaderLeft,
        }}
      />
      <HomeStack.Screen name="Account" component={AccountScreen} />
      <HomeStack.Screen name="Registration" component={RegistrationScreen} />
    </HomeStack.Navigator>
  );
};

const TabBarIcon = () => {
  return <Image style={{ width: 28, height: 28 }} source={homeIcon}></Image>;
};

const TabBarIconBasket = observer((prop) => {
  return (
    <View>
      <View
        style={{
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "blue",
          position: "absolute",
          zIndex: 1,
          top: -10,
          left: -5,
        }}
      >
        {orderStore.orders.length > 0 && (
          <Text style={{ color: "white" }}>
            {orderStore.calculateTotalQuantity}
          </Text>
        )}
      </View>
      <Image style={{ width: 28, height: 28 }} source={basketIcon}></Image>
    </View>
  );
});

const TabBarIconSettings = () => {
  return <Image style={{ width: 28, height: 28 }} source={accountIcon}></Image>;
};

const MyTabs = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
        tabBarStyle: [
          {
            display: "flex",
            paddingBottom: 15,
          },
          null,
        ],
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: TabBarIcon,
        }}
      />
      <BottomTab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          tabBarIcon: function Icon() {
            return <TabBarIconBasket />;
          },
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={RegistrationScreen}
        options={{
          tabBarIcon: TabBarIconSettings,
        }}
      />
    </BottomTab.Navigator>
  );
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
