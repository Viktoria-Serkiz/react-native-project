import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import CustomTabBarIcon from "../common/components/CustomTabBarIcon";

import { HomeScreen } from "../screens/home/screens/HomeScreen";
import { PizzaScreen } from "../screens/home/screens/PizzaScreen";
import { ModalScreen } from "../screens/home/screens/ModalScreen";
import { SettingsScreen } from "../screens/home/screens/SettingsScreen";

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
    </HomeStack.Navigator>
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
          },
          null,
        ],
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeStack}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <CustomTabBarIcon iconName="home" focused={!focused} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <CustomTabBarIcon iconName="settings" focused={!focused} />
          ),
        })}
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
