import { Text, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";

import { HomeScreen } from "../screens/home/screens/HomeScreen";
import { PizzaScreen } from "../screens/home/screens/PizzaScreen";
import { ModalScreen } from "../screens/home/screens/ModalScreen";
import { BasketScreen } from "../screens/home/screens/BasketScreen";
import { SettingsScreen } from "../screens/home/screens/SettingsScreen";

import settingsIcon from "../utils/img/settings-icon.png";
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

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
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
        options={{
          headerLeft: HeaderLeft,
        }}
        name="Backet"
        component={BasketScreen}
      />
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
        <Text style={{ color: "white" }}>{orderStore.orders.length}</Text>
      </View>
      <Image style={{ width: 28, height: 28 }} source={basketIcon}></Image>
    </View>
  );
});

const TabBarIconSettings = () => {
  return (
    <Image style={{ width: 28, height: 28 }} source={settingsIcon}></Image>
  );
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
        name="Settings"
        component={SettingsScreen}
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
